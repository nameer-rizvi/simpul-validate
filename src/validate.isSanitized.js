const sanitized = require("sanitized");

function validateIsSanitized({
  ignoreIsSanitized,
  type,
  typeArrayItem,
  value,
  label,
}) {
  if (!ignoreIsSanitized) {
    if (type === "string" && value !== sanitized(value))
      throw new Error(`${label} is a dirty value.`);

    if (typeArrayItem === "string") {
      for (let i = value.length - 1; i >= 0; i--) {
        let arrayItem = value[i];
        if (arrayItem !== sanitized(arrayItem))
          throw new Error(`"${arrayItem}" is a dirty value.`);
      }
    }
  }
}

module.exports = validateIsSanitized;
