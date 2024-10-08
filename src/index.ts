import { Definition, Options, Object } from "./util.interfaces";
import simpul from "simpul";
import resolver from "./validate.index";
import * as stringStripHtml from "string-strip-html";
import sanitized from "sanitized";

function initializer(dictionary: Definition[], option: Options = {}) {
  // Dictionary.

  if (!simpul.isArray(dictionary)) {
    throw new Error("Dictionary must be an array.");
  }

  dictionary = dictionary.filter(simpul.isObject);

  // Validator.

  return function validator(payload: undefined | Object, required: string[]) {
    // Payload.

    if (typeof payload === "undefined") {
      return;
    } else if (!simpul.isObject(payload)) {
      throw new Error("Payload must be an object.");
    }

    for (const [key, value] of Object.entries(payload)) {
      // Definition.

      const definition = dictionary[dictionary.findIndex((i) => i.key === key)];

      if (typeof definition === "undefined") {
        const error = `Dictionary definition with key ("${key}") does not exist.`;

        throw new Error(error);
      }

      definition.label = simpul.capitalize(definition.label || key) || "";

      // Validation.

      if (simpul.isValid(value)) {
        for (const [name, setting] of Object.entries(definition)) {
          const validation = { ...resolver, ...option.custom }[name];

          if (typeof validation === "undefined") continue;

          let matchV, matchD;

          if (name === "match") {
            matchV = payload[setting];

            matchD = dictionary[dictionary.findIndex((i) => i.key === setting)];
          }

          validation({
            setting,
            value,
            label: definition.label,
            match: matchV,
            matchLabel: matchD?.label,
          });
        }
      }

      // Required.

      if (required?.includes(key)) {
        const isValue = simpul.isString(value)
          ? key.toLowerCase().includes("html") ||
            key.toLowerCase().includes("rich_text")
            ? stringStripHtml.stripHtml(value).result.trim().length > 0
            : value.trim().length > 0
          : simpul.isValid(value);

        if (isValue === false) {
          throw new Error(`${definition.label} is required.`);
        }
      }

      // Sanitize

      if (definition.ignoreSanitizer !== true) {
        const sanitizedValue = sanitized(value, option.domPurifyOptions || {});

        if (definition.ignoreSanitizerValidation !== true) {
          if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
            throw new Error(`${definition.label} is a dirty value.`);
          }
        }

        payload[key] = sanitizedValue;
      }
    }
  };
}

export = initializer;
