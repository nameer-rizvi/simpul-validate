import { Validation } from "./util.interfaces";
import safeR from "safe-regex";
import simpul from "simpul";

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
  onlyLetters: {
    r: RegExp(/^[a-zA-Z]+$/),
    warning: "can only contain letters",
  },
  onlyNumbers: {
    r: RegExp(/^\d+$/),
    warning: "can only contain numbers",
  },
  website: {
    r: RegExp(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(:\d+)?(\/[^\s]*)?$/,
    ),
    warning: "must be a valid website",
  },
} as { [key: string]: object };

function validateRegex({ label, setting, value }: Validation) {
  for (const regex of setting) {
    if (!safeR(value)) throw new Error(`${label} input is unsafe.`);

    const config = typeof regex === "string" ? resolver[regex] : regex;

    if (!simpul.isObject(config)) {
      throw new Error(`Regex config for ${label} is undefined.`);
    } else if (!config.r) {
      throw new Error(`Regex config.r for ${label} is undefined.`);
    } else if (!config.warning) {
      throw new Error(`Regex config.warning for ${label} is undefined.`);
    }

    if (config.r.test(value) === false) {
      throw new Error(`${label} ${config.warning}.`);
    }
  }
}

export default validateRegex;
