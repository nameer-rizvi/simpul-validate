const simpul = require("simpul");
const stringStripHtml = require("string-strip-html");

function validateMinWordsHTML({ value, setting, label }) {
  const v = simpul.stringlength.word(stringStripHtml.stripHtml(value).result);
  if (v < setting) {
    throw new Error(`${label} must be at least ${setting} words.`);
  }
}

module.exports = validateMinWordsHTML;
