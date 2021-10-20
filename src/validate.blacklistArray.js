const validateBlacklist = require("./validate.blacklist");

function validateBlacklistArray({ value: values, setting, label }) {
  for (let i = values.length - 1; i >= 0; i--) {
    validateBlacklist({ value: values[i], setting, label });
  }
}

module.exports = validateBlacklistArray;
