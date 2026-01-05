import { ValidationArgs } from "./interfaces";
import validateMaxLength from "./validate.maxLength";
import simpul from "simpul";

function validateMaxLengthValueArray({
  label,
  value: values,
  ...rest
}: ValidationArgs) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      validateMaxLength({ label: `${label}: "${value}"`, value, ...rest });
    }
  }
}

export default validateMaxLengthValueArray;
