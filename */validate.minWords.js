const simpul = require("simpul");

function validateMinWords({ value, setting, label }) {
  if (simpul.stringlength.word(value) < setting) {
    throw new Error(`${label} must be at least ${setting} words.`);
  }
}

module.exports = validateMinWords;
