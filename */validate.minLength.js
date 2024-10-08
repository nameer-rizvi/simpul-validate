function validateMinLength({ value, setting, label }) {
  if (value.length < setting) {
    throw new Error(`${label} must be at least ${setting} characters.`);
  }
}

module.exports = validateMinLength;
