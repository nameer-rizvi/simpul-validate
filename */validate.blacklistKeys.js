const validateBlacklistArray = require("./validate.blacklistArray");

function validateBlacklistKeys(props) {
  validateBlacklistArray({ ...props, value: Object.keys(props.value) });
}

module.exports = validateBlacklistKeys;
