const validateBlacklist = require("./validate.blacklist");

function validateBlacklistArray({ value: values, setting, label }) {
  for (const value of values) {
    validateBlacklist({ value, setting, label });
  }
}

module.exports = validateBlacklistArray;
