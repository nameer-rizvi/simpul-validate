function validateMaxLength({ value, setting, label }) {
  if (value.length > setting) {
    const error = `${label} must be less than or equal to ${setting} characters.`;
    throw new Error(error);
  }
}

module.exports = validateMaxLength;
