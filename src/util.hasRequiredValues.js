const simpul = require("simpul");
const stringStripHtml = require("string-strip-html");
const getDictionaryDefinition = require("./util.getDictionaryDefinition");

function hasRequiredValues(required, payload, dictionary) {
  for (let requiredKey of required) {
    let requiredValue = payload[requiredKey];
    let hasRequiredValue = simpul.isString(requiredValue)
      ? requiredKey.toLowerCase().includes("html") ||
        requiredKey.toLowerCase().includes("rich_text")
        ? simpul.isStringValid(stringStripHtml.stripHtml(requiredValue).result)
        : simpul.isStringValid(requiredValue)
      : simpul.isValid(requiredValue);
    if (!hasRequiredValue) {
      const { label } = getDictionaryDefinition(dictionary, requiredKey);
      throw new Error(`${label} is required.`);
    }
  }
}

module.exports = hasRequiredValues;
