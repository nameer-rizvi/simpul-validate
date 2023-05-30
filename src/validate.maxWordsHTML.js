const simpul = require("simpul");
const stringStripHtml = require("string-strip-html");

function validateMaxWordsHTML({ value, setting, label }) {
  const v = simpul.stringlength.word(stringStripHtml.stripHtml(value).result);
  if (v > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
  }
}

module.exports = validateMaxWordsHTML;
