const safeR = require("safe-regex");
const simpul = require("simpul");

const resolver = {
  email: {
    r: RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    warning: "must be properly formatted",
  },
  noSpecialChar: {
    r: RegExp(/^\w+$/),
    warning: "can only contain letters, numbers, and '_'",
  },
  noWhitespace: {
    r: RegExp(/^\S+$/),
    warning: "can't include any spaces",
  },
};

function validateRegex({ setting, value, label }) {
  for (let regex of setting) {
    if (!safeR(value)) {
      throw new Error(label + " is forbidden.. please try something else.");
    } else {
      let config = simpul.isString(regex) ? resolver[regex] : regex;
      if (!config)
        throw new Error(`Missing regex config for: ${regex.r || regex}.`);
      if (!config.r)
        throw new Error(`Missing regex.r for: ${regex.r || regex}.`);
      if (!config.warning)
        throw new Error(`Missing regex.warning for: ${regex.r || regex}.`);
      if (!config.r.test(value)) throw new Error(`${label} ${config.warning}.`);
    }
  }
}

module.exports = validateRegex;
