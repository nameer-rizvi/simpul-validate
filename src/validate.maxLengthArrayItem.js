const maxLength = require("./validate.maxLength");

function validateMaxLengthArrayItem({ value: values, ...rest }) {
  for (let value of values) {
    maxLength({ ...rest, value, label: rest.label + ": " + value });
  }
}

module.exports = validateMaxLengthArrayItem;
