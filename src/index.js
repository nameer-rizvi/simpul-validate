const { isArrayValid, isObject } = require("simpul");
const validatePayload = require("./util.validatePayload");
const hasRequiredValues = require("./util.hasRequiredValues");
const sanitizePayload = require("./util.sanitizePayload");

function validateInitialize(dictionary, options = {}) {
  function validate(payload, required) {
    if (!isObject(payload)) throw new Error("Payload must be an object.");

    if (!isArrayValid(dictionary))
      throw new Error("Data dictionary (array of configs) is required.");

    validatePayload(payload, dictionary, options);

    if (required) hasRequiredValues(payload, required, dictionary);

    return sanitizePayload(payload, options.DOMPurifyOptions, dictionary);
  }

  return options.async
    ? async (payload, required) => validate(payload, required)
    : validate;
}

module.exports = validateInitialize;
