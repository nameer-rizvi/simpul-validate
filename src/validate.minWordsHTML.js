const { stringLength } = require("simpul");
const stripHtml = require("string-strip-html");

function validateMinWordsHTML({ value, setting, label }) {
  if (stringLength.word(stripHtml(value)) < setting)
    throw new Error(`${label} must be at least ${setting} words.`);
}

module.exports = validateMinWordsHTML;
