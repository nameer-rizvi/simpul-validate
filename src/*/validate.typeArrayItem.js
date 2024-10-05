const type = require("./validate.type");

function validateTypeArrayItem({ value: values, ...rest }) {
  for (let value of values) {
    type({ ...rest, value, label: `${rest.label}: ${JSON.stringify(value)}` });
  }
}

module.exports = validateTypeArrayItem;
