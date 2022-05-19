const { isString, isStringValid, isValid } = require("simpul");
const { stripHtml } = require("string-strip-html");
const getDictionaryDefinition = require("./util.getDictionaryDefinition");

function hasRequiredValues(required, payload, dictionary) {
  for (let i = required.length - 1; i >= 0; i--) {
    let requiredKey = required[i];

    let requiredValue = payload[requiredKey];

    let hasRequiredValue = isString(requiredValue)
      ? requiredKey.toLowerCase().includes("html") ||
        requiredKey.toLowerCase().includes("rich_text")
        ? isStringValid(stripHtml(requiredValue).result)
        : isStringValid(requiredValue)
      : isValid(requiredValue);

    if (!hasRequiredValue) {
      const { label } = getDictionaryDefinition(dictionary, requiredKey);
      throw new Error(`${label} is required.`);
    }
  }
}

module.exports = hasRequiredValues;
