import { ValidationArgs } from "./interfaces";
import validateMax from "./validate.max";
import simpul from "simpul";

function validateMaxValueObject({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      validateMax({ label: `${label}: "${k}"`, value: v, ...rest });
    }
  }
}

export default validateMaxValueObject;
