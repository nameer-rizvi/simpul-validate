const { isArrayValid, isObject } = require("simpul");
const validatePayload = require("./util.validatePayload");
const hasRequiredValues = require("./util.hasRequiredValues");
const sanitizePayload = require("./util.sanitizePayload");

const validate = (dictionary, option) => (payload, required) => {
  if (!isArrayValid(dictionary))
    throw new Error("Dictionary (array of definitions) is required.");

  if (!isObject(payload)) throw new Error("Payload must be an object.");

  validatePayload(payload, dictionary, option);

  if (required) hasRequiredValues(required, payload, dictionary);

  const sanitizedPayload = sanitizePayload(
    payload,
    option.DOMPurifyOptions,
    dictionary
  );

  return sanitizedPayload;
};

module.exports = (dictionary, option = {}) => {
  if (option.async) {
    return async (payload, required) =>
      validate(dictionary, option)(payload, required);
  } else return validate(dictionary, option);
};
