import { ValidationOptions } from "./interfaces";
import validateMax from "./validate.max";
import simpul from "simpul";

function validateMaxWords({ label, value, ...rest }: ValidationOptions) {
  if (simpul.isString(value)) {
    const label2 = `${label}${simpul.delimiter}words`;
    const value2 = simpul.stringLength.word(value);
    validateMax({ label: label2, value: value2, ...rest });
  }
}

export default validateMaxWords;
