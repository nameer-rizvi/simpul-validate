const { stripHtml } = require("string-strip-html");

function validateMinLengthHTML({ value, setting, label }) {
  if (stripHtml(value).result.length < setting)
    throw new Error(`${label} must be at least ${setting} characters.`);
}

module.exports = validateMinLengthHTML;
