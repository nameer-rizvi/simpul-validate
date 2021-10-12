const safeR = require("safe-regex");
const { isString } = require("simpul");

const resolver = {
  email: {
    r: RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    warning: "is an invalid email",
  },
  noSpecialChar: {
    r: RegExp(/^\w+$/),
    warning: "can only contain letters, numbers, and '_'",
  },
  noWhitespace: {
    r: RegExp(/^\S+$/),
    warning: "can't include spaces/whitespaces",
  },
};

function validateRegex({ value, setting, label }) {
  for (let i = 0; i < setting.length; i++) {
    let regex = setting[i];
    if (!safeR(value)) {
      throw new Error(label + " is hacky code.. please try something else.");
    } else {
      let config = isString(regex) ? resolver[regex] : regex;

      if (!config) throw new Error(`Missing regex config for: ${regex}.`);

      if (!config.r) throw new Error(`Missing regex.r for: ${regex}.`);

      if (!config.warning)
        throw new Error(`Missing regex.warning for: ${regex}.`);

      if (!config.r.test(value)) throw new Error(`${label} ${config.warning}.`);
    }
  }
}

module.exports = validateRegex;
