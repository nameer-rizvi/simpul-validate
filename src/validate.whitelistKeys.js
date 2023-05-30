const validateWhitelist = require("./validate.whitelist");

function validateWhitelistKeys({ value, ...rest }) {
  return validateWhitelist({ value: Object.keys(value), ...rest });
}

module.exports = validateWhitelistKeys;
