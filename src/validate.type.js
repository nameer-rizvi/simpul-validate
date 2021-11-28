const {
  isArray,
  isBase64,
  isBoolean,
  isBooleanNumber,
  isBooleanString,
  isDate,
  isFunction,
  isJSON,
  isJSONString,
  isJWT,
  isNumber,
  isObject,
  isRegex,
  isString,
  isValid,
} = require("simpul");

function validateType({ label, setting, value }) {
  const error = `${label} is not type: ${setting}.`;

  const typeResolver = {
    array: isArray,
    base64: isBase64,
    boolean: isBoolean,
    booleanNumber: isBooleanNumber,
    booleanString: isBooleanString,
    date: isDate,
    function: isFunction,
    json: isJSON,
    jsonString: isJSONString,
    jwt: isJWT,
    number: isNumber,
    object: isObject,
    regex: isRegex,
    string: isString,
    valid: isValid,
  };

  if (typeResolver[setting]) {
    if (!typeResolver[setting](value)) throw new Error(error);
  } else if (typeof value !== setting) throw new Error(error);
}

module.exports = validateType;
