const { stringLength } = require("simpul");
const stripHtml = require("string-strip-html");

function validateMaxWordsHTML({ value, setting, label }) {
  if (stringLength.word(stripHtml(value)) > setting)
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
}

module.exports = validateMaxWordsHTML;
