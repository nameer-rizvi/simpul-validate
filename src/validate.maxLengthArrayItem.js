const maxLength = require("./validate.maxLength");

function validateMaxLengthArrayItem({ value, ...rest }) {
  for (let i = value.length - 1; i >= 0; i--) {
    maxLength({
      ...rest,
      value: value[i],
      label: rest.label + ": " + JSON.stringify(value[i]),
    });
  }
}

module.exports = validateMaxLengthArrayItem;
