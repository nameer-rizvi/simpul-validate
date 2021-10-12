function validateMax({ value, setting, label }) {
  if (value > setting)
    throw new Error(`${label} must be less than or equal to ${setting}.`);
}

module.exports = validateMax;
