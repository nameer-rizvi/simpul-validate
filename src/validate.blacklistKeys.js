const validateBlacklistArray = require("./validate.blacklistArray");

const validateBlacklistKeys = (props) =>
  validateBlacklistArray({ ...props, value: Object.keys(props.value) });

module.exports = validateBlacklistKeys;
