function validateWhitelistArray({ value: values, setting, label }) {
  for (let i = values.length - 1; i >= 0; i--) {
    let value = values[i];
    if (!setting.includes(value))
      throw new Error(`${label}: "${value}" is not an acceptable value.`);
  }
}

module.exports = validateWhitelistArray;
