// import * as stringStripHtml from "string-strip-html";

function validateMinLengthHTML({ value, setting, label }) {
  if (stringStripHtml.stripHtml(value).result.length < setting) {
    throw new Error(`${label} must be at least ${setting} characters.`);
  }
}

module.exports = validateMinLengthHTML;
