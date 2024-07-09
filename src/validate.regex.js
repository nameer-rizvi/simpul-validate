const safeR = require("safe-regex");
const simpul = require("simpul");

const resolver = {
  email: {
    r: RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    warning: "must be properly formatted",
  },
  website: {
    r: RegExp(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(:\d+)?(\/[^\s]*)?$/,
    ),
    warning: "must be a valid website",
  },
  noSpecialChar: {
    r: RegExp(/^\w+$/),
    warning: "can only contain letters, numbers, and '_'",
  },
  noWhitespace: {
    r: RegExp(/^\S+$/),
    warning: "can't include any spaces",
  },
  onlyLetters: {
    r: RegExp(/^[a-zA-Z]+$/),
    warning: "can only contain letters",
  },
  onlyNumbers: {
    r: RegExp(/^\d+$/),
    warning: "can only contain numbers",
  },
};

function validateRegex({ setting, value, label }) {
  for (const regex of setting) {
    if (!safeR(value)) {
      throw new Error(`${label} is forbidden.. please try something else.`);
    }

    const config = simpul.isString(regex) ? resolver[regex] : regex;

    if (!config) {
      throw new Error(`Missing regex config for: ${regex.r || regex}.`);
    }

    if (!config.r) {
      throw new Error(`Missing regex.r for: ${regex.r || regex}.`);
    }

    if (!config.warning) {
      throw new Error(`Missing regex.warning for: ${regex.r || regex}.`);
    }

    if (!config.r.test(value)) {
      throw new Error(`${label} ${config.warning}.`);
    }
  }
}

module.exports = validateRegex;
