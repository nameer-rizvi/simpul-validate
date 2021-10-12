const {
  isArray,
  isBase64,
  isBoolean,
  isDate,
  isFunction,
  isJSON,
  isJSONString,
  isNumber,
  isRegex,
  isString,
  isValid,
} = require("simpul");

function validateType({ label, setting, value }) {
  const error = `${label} is not type: ${setting}.`;

  if (setting === "array") {
    if (!isArray(value)) throw new Error(error);
  } else if (setting === "base64") {
    if (!isBase64(value)) throw new Error(error);
  } else if (setting === "boolean") {
    if (!isBoolean(value)) throw new Error(error);
  } else if (setting === "booleanString") {
    if (!isString(value) || (value !== "true" && value !== "false"))
      throw new Error(error);
  } else if (setting === "boolean") {
    if (!isBoolean(value)) throw new Error(error);
  } else if (setting === "date") {
    if (!isDate(value)) throw new Error(error);
  } else if (setting === "error") {
    if (!isString(value.message) && !isString(value.stack))
      throw new Error(error);
  } else if (setting === "function") {
    if (!isFunction(value)) throw new Error(error);
  } else if (setting === "json") {
    if (!isJSON(value)) throw new Error(error);
  } else if (setting === "jsonString") {
    if (!isJSONString(value)) throw new Error(error);
  } else if (setting === "number") {
    if (!isNumber(value)) throw new Error(error);
  } else if (setting === "regex") {
    if (!isRegex(value)) throw new Error(error);
  } else if (setting === "string") {
    if (!isString(value)) throw new Error(error);
  } else if (setting === "valid") {
    if (!isValid(value, "testAll")) throw new Error(error);
  }
}

module.exports = validateType;
