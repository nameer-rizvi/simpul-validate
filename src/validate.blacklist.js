function validateBlacklist({ value, setting, label }) {
  const makeError = (blacklistItem) =>
    `${label}: "${blacklistItem}" is a reserved term.`;

  if (setting.exact) {
    for (let i = setting.exact.length - 1; i >= 0; i--) {
      let blacklistItem = setting.exact[i];
      if (blacklistItem === value.trim())
        throw new Error(makeError(blacklistItem));
    }
  }

  if (setting.loose) {
    for (let i = setting.loose.length - 1; i >= 0; i--) {
      let blacklistItem = setting.loose[i];
      if (value.toLowerCase().includes(blacklistItem))
        throw new Error(makeError(blacklistItem));
    }
  }
}

module.exports = validateBlacklist;
