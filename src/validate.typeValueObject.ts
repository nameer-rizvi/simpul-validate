import { ValidationArgs } from "./interfaces";
import validateType from "./validate.type";
import simpul from "simpul";

function validateTypeValueObject({ label, value, ...rest }: ValidationArgs) {
  if (simpul.isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      validateType({ label: `${label}: "${k}"`, value: v, ...rest });
    }
  }
}

export default validateTypeValueObject;
