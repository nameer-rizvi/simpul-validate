const { isString, isStringValid, isValid } = require("simpul");
const { stripHtml } = require("string-strip-html");
const getDictionaryConfig = require("./util.getDictionaryConfig");

function hasRequiredValues(payload, required, dictionary) {
  for (let i = required.length - 1; i >= 0; i--) {
    let requiredKey = required[i];

    let requiredValue = payload[requiredKey];

    let hasRequiredValue = isString(requiredValue)
      ? requiredKey.includes("html") || requiredKey.includes("rich_text")
        ? isStringValid(stripHtml(requiredValue).result)
        : isStringValid(requiredValue)
      : isValid(requiredValue);

    if (!hasRequiredValue)
      throw new Error(
        `${getDictionaryConfig(dictionary, requiredKey).label} is required.`
      );
  }
}

module.exports = hasRequiredValues;
