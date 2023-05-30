const sanitized = require("sanitized");

function validateIsSanitized({
  ignoreIsSanitized,
  type,
  typeArrayItem,
  value,
  label,
}) {
  if (!ignoreIsSanitized) {
    if (type === "string" && value !== sanitized(value)) {
      throw new Error(`${label} is a dirty value.`);
    }
    if (typeArrayItem === "string") {
      for (let v of value) {
        if (v !== sanitized(v)) {
          throw new Error(`${label}: "${v}" is a dirty value.`);
        }
      }
    }
  }
}

module.exports = validateIsSanitized;
