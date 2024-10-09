import { Validation } from "./util.interfaces";
import validateWhitelist from "./validate.whitelist";

function validateWhitelistKeys({ value, ...rest }: Validation) {
  try {
    validateWhitelist({ value: Object.keys(value), ...rest });
  } catch (err) {
    const error = `${err}`.replace("Error:", "").replace("value", "key").trim();
    throw new Error(error);
  }
}

export default validateWhitelistKeys;
