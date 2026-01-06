import { ValidationOptions } from "./interfaces";
import validateWhitelist from "./validate.whitelist";
import simpul from "simpul";

function validateWhitelistKeys({ value, ...rest }: ValidationOptions) {
  try {
    if (simpul.isObject(value)) {
      validateWhitelist({ value: Object.keys(value), ...rest });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message.replace("value", "key").trim());
  }
}

export default validateWhitelistKeys;
