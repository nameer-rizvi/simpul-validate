function validateMaxLengthArray({ value, setting, label }) {
  if (value.length > setting) {
    const error = `${label} must be less than or equal to ${setting} items.`;
    throw new Error(error);
  }
}

module.exports = validateMaxLengthArray;
