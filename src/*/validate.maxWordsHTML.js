const simpul = require("simpul");
// import * as stringStripHtml from "string-strip-html";

function validateMaxWordsHTML({ value, setting, label }) {
  const v = simpul.stringlength.word(stringStripHtml.stripHtml(value).result);
  if (v > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
  }
}

module.exports = validateMaxWordsHTML;
