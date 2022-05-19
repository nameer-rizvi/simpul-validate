const { capitalize } = require("simpul");

function getDictionaryDefinition(dictionary, key) {
  for (let i = 0; i < dictionary.length; i++)
    if (dictionary[i]?.key === key)
      return {
        ...dictionary[i],
        label: capitalize(dictionary[i].label || key),
      };

  throw new Error(`Dictionary definition with key ("${key}") does not exist.`);
}

module.exports = getDictionaryDefinition;
