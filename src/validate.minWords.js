const { stringLength } = require("simpul");

function validateMinWords({ value, setting, label }) {
  if (stringLength.word(value) < setting)
    throw new Error(`${label} must be at least ${setting} words.`);
}

module.exports = validateMinWords;
