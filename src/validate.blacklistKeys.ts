import { ValidationArgs } from "./interfaces";
import validateBlacklist from "./validate.blacklist";

function validateBlacklistKeys({ value, ...rest }: ValidationArgs) {
  try {
    validateBlacklist({ value: Object.keys(value!), ...rest });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message.replace("term", "key").trim());
  }
}

export default validateBlacklistKeys;
