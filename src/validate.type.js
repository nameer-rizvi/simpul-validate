const {
  isArray,
  isBase64,
  isBoolean,
  isBooleanAny,
  isBooleanNumber,
  isBooleanString,
  isDate,
  isFunction,
  isHTTP,
  isJSON,
  isJSONString,
  isJWT,
  isNumber,
  isObject,
  isRegex,
  isString,
  isStringOrArray,
  isValid,
} = require("simpul");

function validateType({ label, setting, value }) {
  const error = `${label} is not type: ${setting}.`;

  const typeResolver = {
    array: isArray,
    base64: isBase64,
    boolean: isBoolean,
    booleanAny: isBooleanAny,
    booleanNumber: isBooleanNumber,
    booleanString: isBooleanString,
    date: isDate,
    function: isFunction,
    http: isHTTP,
    json: isJSON,
    jsonString: isJSONString,
    jwt: isJWT,
    number: isNumber,
    object: isObject,
    regex: isRegex,
    string: isString,
    stringOrArray: isStringOrArray,
    valid: isValid,
  };

  if (typeResolver[setting]) {
    if (!typeResolver[setting](value)) throw new Error(error);
  } else if (typeof value !== setting) throw new Error(error);
}

module.exports = validateType;
