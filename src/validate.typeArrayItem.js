const type = require("./validate.type");

function validateTypeArrayItem({ value, ...rest }) {
  for (let i = value.length - 1; i >= 0; i--) {
    type({
      ...rest,
      value: value[i],
      label: rest.label + ": " + JSON.stringify(value[i]),
    });
  }
}

module.exports = validateTypeArrayItem;
