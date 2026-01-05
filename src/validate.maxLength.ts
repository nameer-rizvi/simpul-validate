import { ValidationArgs } from "./interfaces";
import validateMax from "./validate.max";
import simpul from "simpul";

function validateMaxLength({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isStringOrArray(value)) {
    const thing = simpul.isString(value) ? "characters" : "items";
    const label2 = `${label}${simpul.delimiter}${thing}`;
    validateMax({ label: label2, value: value.length, ...rest });
  }
}

export default validateMaxLength;
