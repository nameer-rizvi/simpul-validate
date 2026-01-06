import { ValidationOptions } from "./interfaces";
import validateMinLength from "./validate.minLength";
import simpul from "simpul";

function validateMinLengthValueObject({
  label,
  value,
  ...rest
}: ValidationOptions) {
  if (simpul.isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      validateMinLength({ label: `${label}: "${k}"`, value: v, ...rest });
    }
  }
}

export default validateMinLengthValueObject;
