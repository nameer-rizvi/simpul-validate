import simpul from "simpul";
import sanitized from "sanitized";
import * as stringStripHtml from "string-strip-html";
import {
  Definition,
  DefinitionMap,
  Options,
  ValidationResolver,
  PayloadObject,
  RequiredList,
} from "./interfaces";
import validateIndex from "./validate.index";

function initializer(dictionary: Definition[], option: Options = {}) {
  const defMap: DefinitionMap = new Map();

  for (const definition of dictionary) {
    if (typeof definition === "object" && definition !== null) {
      const label = definition.label || definition.key || "";
      defMap.set(definition.key, Object.freeze({ ...definition, label }));
    }
  }

  const validationResolver: ValidationResolver = {
    ...validateIndex,
    ...option.custom,
  };

  return function validator(payload?: PayloadObject, required?: RequiredList) {
    if (payload === undefined) return;

    for (const [key, value] of Object.entries(payload)) {
      const definition = getDefinition(defMap, key);

      if (simpul.isValid(value)) {
        for (const [name, setting] of Object.entries(definition)) {
          const validation = validationResolver[name];

          if (validation === undefined) continue;

          let matchV, matchD;

          if (name === "match") {
            matchV = payload[setting];
            matchD = getDefinition(defMap, setting);
          }

          validation({
            setting,
            value,
            label: definition.label!,
            match: matchV,
            matchLabel: matchD?.label,
          });
        }
      }

      const isSanitizer =
        definition.ignoreSanitizer !== true &&
        (simpul.isString(value) ||
          simpul.isArray(value) ||
          simpul.isObject(value));

      if (isSanitizer) {
        const sanitizedValue = sanitized(value, option.domPurifyOptions);

        if (definition.ignoreSanitizerValidation !== true) {
          if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
            throw new Error(`${definition.label} is a dirty value.`);
          }
        }

        payload[key] = sanitizedValue;
      }
    }

    for (const requiredKey of required || []) {
      const value = payload[requiredKey];

      const isValue = simpul.isString(value)
        ? requiredKey.toLowerCase().includes("html") ||
          requiredKey.toLowerCase().includes("rich_text")
          ? stringStripHtml.stripHtml(value).result.trim().length > 0
          : value.trim().length > 0
        : simpul.isValid(value);

      if (isValue === false) {
        const definition = getDefinition(defMap, requiredKey);
        throw new Error(`${definition.label} is required.`);
      }
    }
  };
}

function getDefinition(defMap: DefinitionMap, key: string): Definition {
  const definition = defMap.get(key);
  if (!definition) throw new Error(`Definition with key ("${key}") not found.`);
  return definition;
}

export = initializer;
