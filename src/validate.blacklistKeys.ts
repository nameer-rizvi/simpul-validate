import { Validation } from "./util.interfaces";
import validateBlacklist from "./validate.blacklist";

function validateBlacklistKeys({ value, ...rest }: Validation) {
  try {
    validateBlacklist({ value: Object.keys(value), ...rest });
  } catch (err) {
    const error = `${err}`.replace("Error:", "").replace("term", "key").trim();
    throw new Error(error);
  }
}

export default validateBlacklistKeys;
