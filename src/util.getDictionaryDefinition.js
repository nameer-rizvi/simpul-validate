const simpul = require("simpul");

function getDictionaryDefinition(dictionary, key) {
  for (let definition of dictionary) {
    if (definition?.key === key) {
      definition.label = simpul.capitalize(definition.label || key);
      return definition;
    }
  }
  throw new Error(`Dictionary definition with key ("${key}") does not exist.`);
}

module.exports = getDictionaryDefinition;
