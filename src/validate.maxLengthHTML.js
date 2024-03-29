const stringStripHtml = require("string-strip-html");

function validateMaxLengthHTML({ value, setting, label }) {
  if (stringStripHtml.stripHtml(value).result.length > setting) {
    const error = `${label} must be less than or equal to ${setting} characters.`;
    throw new Error(error);
  }
}

module.exports = validateMaxLengthHTML;
