import { ValidationArgs } from "./interfaces";
import simpul from "simpul";

function validateMaxLength({ label, setting, value }: ValidationArgs) {
  if (simpul.isStringOrArray(value) && simpul.isNumber(setting)) {
    if (value.length > setting) {
      const thing = simpul.isString(value) ? "characters" : "items";
      const error = `${label} must be less than or equal to ${setting} ${thing}.`;
      throw new Error(error);
    }
  }
}

export default validateMaxLength;
