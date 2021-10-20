function validateWhitelistKeys({ value, setting, label }) {
  const keys = Object.keys(value);

  for (let i = 0; i < keys.length; i++) {
    if (!setting.includes(keys[i]))
      throw new Error(`${label}: "${keys[i]}" is not an acceptable key.`);
  }
}

module.exports = validateWhitelistKeys;
