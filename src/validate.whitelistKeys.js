const validateWhitelist = require("./validate.whitelist");

const validateWhitelistKeys = ({ value, ...rest }) =>
  validateWhitelist({ value: Object.keys(value), ...rest });

module.exports = validateWhitelistKeys;
