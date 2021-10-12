function getDictionaryConfig(dictionary, key) {
  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].key === key) return dictionary[i];
  }
}

module.exports = getDictionaryConfig;
