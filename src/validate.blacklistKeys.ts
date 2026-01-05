import { ValidationArgs } from "./interfaces";
import validateBlacklist from "./validate.blacklist";
import simpul from "simpul";

function validateBlacklistKeys({ value, ...rest }: ValidationArgs) {
  try {
    if (simpul.isObject(value)) {
      validateBlacklist({ value: Object.keys(value), ...rest });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message.replace("term", "key").trim());
  }
}

export default validateBlacklistKeys;
