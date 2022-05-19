const { isString, isArray } = require("simpul");

function validateBlacklist({ setting, value, label }) {
  if (isString(setting) && setting === value.trim())
    throw new Error(makeError(label, value));

  if (isArray(setting))
    for (let i = 0; i < setting.length; i++) {
      let blacklistedTerm = setting[i];
      if (blacklistedTerm === value.trim())
        throw new Error(makeError(label, blacklistedTerm));
    }

  if (setting.exact) {
    if (!isArray(setting.exact))
      throw new Error(`${label}: blacklist.exact must be an array.`);
    for (let i = setting.exact.length - 1; i >= 0; i--) {
      let blacklistedTerm = setting.exact[i];
      if (blacklistedTerm === value.trim())
        throw new Error(makeError(label, blacklistedTerm));
    }
  }

  if (setting.loose) {
    if (!isArray(setting.loose))
      throw new Error(`${label}: blacklist.loose must be an array.`);
    for (let i = setting.loose.length - 1; i >= 0; i--) {
      let blacklistedTerm = setting.loose[i].toLowerCase();
      if (value.toLowerCase().includes(blacklistedTerm))
        throw new Error(makeError(label, blacklistedTerm));
    }
  }
}

function makeError(label, blacklistedTerm) {
  return `${label}: "${blacklistedTerm}" is a reserved term.`;
}

module.exports = validateBlacklist;
