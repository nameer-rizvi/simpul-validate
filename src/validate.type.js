const simpul = require("simpul");

function validateType({ label, setting, value }) {
  const error = `${label} is not type: ${setting}.`;

  const typeResolver = {
    array: simpul.isArray,
    base64: simpul.isBase64,
    boolean: simpul.isBoolean,
    booleanAny: simpul.isBooleanAny,
    booleanNumber: simpul.isBooleanNumber,
    booleanString: simpul.isBooleanString,
    date: simpul.isDate,
    function: simpul.isFunction,
    http: simpul.isHTTP,
    json: simpul.isJSON,
    jsonString: simpul.isJSONString,
    jwt: simpul.isJWT,
    number: simpul.isNumber,
    object: simpul.isObject,
    regex: simpul.isRegex,
    string: simpul.isString,
    stringOrArray: simpul.isStringOrArray,
    valid: simpul.isValid,
  };

  if (typeResolver[setting]) {
    if (!typeResolver[setting](value)) throw new Error(error);
  } else if (typeof value !== setting) throw new Error(error);
}

module.exports = validateType;
