const { capitalize } = require("simpul");

function getDictionaryConfig(dictionary, key) {
  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i] && dictionary[i].key === key) {
      dictionary[i].label = capitalize(dictionary[i].label || key);
      return dictionary[i];
    }
  }
}

module.exports = getDictionaryConfig;
