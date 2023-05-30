const simpul = require("simpul");

function validateBlacklist({ setting, value, label }) {
  if (simpul.isString(setting) && setting === value.trim()) {
    throw new Error(makeError(label, value));
  }

  if (simpul.isArray(setting)) {
    for (let blacklistedTerm of setting) {
      if (blacklistedTerm === value.trim()) {
        throw new Error(makeError(label, blacklistedTerm));
      }
    }
  }

  if (setting.exact) {
    if (!simpul.isArray(setting.exact)) {
      throw new Error(`${label}: blacklist.exact must be an array.`);
    }
    for (let blacklistedTerm of setting.exact) {
      if (blacklistedTerm === value.trim()) {
        throw new Error(makeError(label, blacklistedTerm));
      }
    }
  }

  if (setting.loose) {
    if (!simpul.isArray(setting.loose)) {
      throw new Error(`${label}: blacklist.loose must be an array.`);
    }
    for (let blacklistedTerm of setting.loose) {
      if (value.toLowerCase().includes(blacklistedTerm)) {
        throw new Error(makeError(label, blacklistedTerm));
      }
    }
  }
}

function makeError(label, blacklistedTerm) {
  return `${label}: "${blacklistedTerm}" is a reserved term.`;
}

module.exports = validateBlacklist;
