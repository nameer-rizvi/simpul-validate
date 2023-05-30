const simpul = require("simpul");
const validatePayload = require("./util.validatePayload");
const hasRequiredValues = require("./util.hasRequiredValues");
const sanitizePayload = require("./util.sanitizePayload");

function simpul_validate_init(dictionary, option = {}) {
  return function simpul_validate(payload, required) {
    if (!simpul.isArrayValid(dictionary)) {
      throw new Error("Dictionary (array of definitions) is required.");
    }

    if (!simpul.isObject(payload)) {
      throw new Error("Payload must be an object.");
    }

    if (simpul.isObjectValid(payload)) {
      validatePayload(payload, dictionary, option);
    }

    if (simpul.isArrayValid(required)) {
      hasRequiredValues(required, payload, dictionary);
    }

    const sanitizedPayload = sanitizePayload(
      payload,
      option.DOMPurifyOptions,
      dictionary
    );

    return sanitizedPayload;
  };
}

module.exports = simpul_validate_init;
