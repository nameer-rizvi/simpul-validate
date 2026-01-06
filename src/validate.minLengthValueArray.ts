import { ValidationOptions } from "./interfaces";
import validateMinLength from "./validate.minLength";
import simpul from "simpul";

function validateMinLengthValueArray({
  label,
  value: values,
  ...rest
}: ValidationOptions) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      validateMinLength({ label: `${label}: "${value}"`, value, ...rest });
    }
  }
}

export default validateMinLengthValueArray;
