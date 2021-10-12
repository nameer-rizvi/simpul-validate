function validateWhitelist({ value, setting, label }) {
  if (!setting.includes(value))
    throw new Error(`${label}: "${value}" is not an acceptable value.`);
}

module.exports = validateWhitelist;
