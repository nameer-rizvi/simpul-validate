import { ValidationArgs } from "./interfaces";
import validateMin from "./validate.min";
import simpul from "simpul";

function validateMinValueObject({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      validateMin({ label: `${label}: "${k}"`, value: v, ...rest });
    }
  }
}

export default validateMinValueObject;
