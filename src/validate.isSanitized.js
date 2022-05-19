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

    if (typeArrayItem === "string")
      for (let i = value.length - 1; i >= 0; i--)
        if (value[i] !== sanitized(value[i]))
          throw new Error(`${label}: "${value[i]}" is a dirty value.`);
  }
}

module.exports = validateIsSanitized;
