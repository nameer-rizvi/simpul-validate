import { ValidationArgs } from "./interfaces";
import validateMin from "./validate.min";
import simpul from "simpul";

function validateMinLength({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isStringOrArray(value)) {
    const thing = simpul.isString(value) ? "characters" : "items";
    const label2 = `${label}${simpul.delimiter}${thing}`;
    validateMin({ label: label2, value: value.length, ...rest });
  }
}

export default validateMinLength;
