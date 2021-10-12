const { isObject } = require("simpul");
const isValid = require("./util.isValid");
const hasRequired = require("./util.hasRequired");
const sanitized = require("./util.sanitized");

function validateInitialize(dictionary = [], options = {}) {
  function validate(payload, required) {
    if (!isObject(payload)) throw new Error("Payload must be an object.");

    isValid(
      payload,
      options.ignoreValidationConfigKeys,
      dictionary,
      options.validation
    );

    if (required) hasRequired(payload, required, dictionary);

    return sanitized(payload, options.DOMPurifyOptions, dictionary);
  }

  return options.async
    ? async (payload, required) => validate(payload, required)
    : validate;
}

module.exports = validateInitialize;
