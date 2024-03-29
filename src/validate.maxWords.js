const simpul = require("simpul");

function validateMaxWords({ value, setting, label }) {
  if (simpul.stringlength.word(value) > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
  }
}

module.exports = validateMaxWords;
