import { Definition, Options, Object } from "./util.interfaces";
import simpul from "simpul";
import resolver from "./validate.index";
import sanitized from "sanitized";
import * as stringStripHtml from "string-strip-html";

function initializer(dictionary: Definition[], option: Options = {}) {
  // Dictionary.

  if (!simpul.isArray(dictionary)) {
    throw new Error("Dictionary must be an array.");
  }

  dictionary = dictionary.filter(simpul.isObject);

  // Validator.

  return function validator(payload: Object, required: string[]) {
    // Payload.

    if (payload === undefined) return;

    if (!simpul.isObject(payload)) {
      throw new Error("Payload must be an object.");
    }

    for (const [key, value] of Object.entries(payload)) {
      const definition = getDefinition(dictionary, key);

      // Validation.

      if (simpul.isValid(value)) {
        for (const [name, setting] of Object.entries(definition)) {
          const validation = { ...resolver, ...option.custom }[name];

          if (validation === undefined) continue;

          let matchV, matchD;

          if (name === "match") {
            matchV = payload[setting];
            matchD = getDefinition(dictionary, setting);
          }

          validation({
            setting,
            value,
            label: definition.label || "",
            match: matchV,
            matchLabel: matchD?.label || "",
          });
        }
      }

      // Sanitize

      const sanitizeValue =
        definition.ignoreSanitizer !== true &&
        (simpul.isString(value) ||
          simpul.isArray(value) ||
          simpul.isObject(value));

      if (sanitizeValue) {
        const sanitizedValue = sanitized(value, option.domPurifyOptions || {});

        if (definition.ignoreSanitizerValidation !== true) {
          if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
            throw new Error(`${definition.label} is a dirty value.`);
          }
        }

        payload[key] = sanitizedValue;
      }
    }

    // Required.

    for (const requiredKey of required || []) {
      const value = payload[requiredKey];

      const isValue = simpul.isString(value)
        ? requiredKey.toLowerCase().includes("html") ||
          requiredKey.toLowerCase().includes("rich_text")
          ? stringStripHtml.stripHtml(value).result.trim().length > 0
          : value.trim().length > 0
        : simpul.isValid(value);

      if (isValue === false) {
        const { label } = getDefinition(dictionary, requiredKey);
        throw new Error(`${label} is required.`);
      }
    }
  };
}

function getDefinition(dictionary: Definition[], key: string): Definition {
  const definition = dictionary[dictionary.findIndex((i) => i.key === key)];
  if (definition === undefined) {
    throw new Error(`Definition with key ("${key}") does not exist.`);
  }
  return { ...definition, label: simpul.capitalize(definition.label || key) };
}

export = initializer;
