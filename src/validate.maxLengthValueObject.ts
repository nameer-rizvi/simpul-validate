import { ValidationArgs } from "./interfaces";
import validateMaxLength from "./validate.maxLength";
import simpul from "simpul";

function validateMaxLengthValueObject({
  label,
  value,
  ...rest
}: ValidationArgs) {
  if (simpul.isObject(value)) {
    for (const [k, v] of Object.entries(value)) {
      validateMaxLength({ label: `${label}: "${k}"`, value: v, ...rest });
    }
  }
}

export default validateMaxLengthValueObject;
