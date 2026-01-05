import { ValidationArgs } from "./interfaces";
import validateMin from "./validate.min";
import simpul from "simpul";

function validateMinWords({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isString(value)) {
    const label2 = `${label}${simpul.delimiter}words`;
    const value2 = simpul.stringLength.word(value);
    validateMin({ label: label2, value: value2, ...rest });
  }
}

export default validateMinWords;
