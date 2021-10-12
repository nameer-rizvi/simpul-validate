const validationResolver = {
  blacklist: require("./validate.blacklist"),
  isSanitized: require("./validate.isSanitized"),
  match: require("./validate.match"),
  max: require("./validate.max"),
  maxLength: require("./validate.maxLength"),
  maxLengthArray: require("./validate.maxLengthArray"),
  maxLengthArrayItem: require("./validate.maxLengthArrayItem"),
  maxLengthHTML: require("./validate.maxLengthHTML"),
  maxWords: require("./validate.maxWords"),
  maxWordsHTML: require("./validate.maxWordsHTML"),
  min: require("./validate.min"),
  minLength: require("./validate.minLength"),
  minLengthHTML: require("./validate.minLengthHTML"),
  minWords: require("./validate.minWords"),
  minWordsHTML: require("./validate.minWordsHTML"),
  regex: require("./validate.regex"),
  type: require("./validate.type"),
  typeArrayItem: require("./validate.typeArrayItem"),
  whitelist: require("./validate.whitelist"),
  whitelistArray: require("./validate.whitelistArray"),
};

module.exports = validationResolver;
