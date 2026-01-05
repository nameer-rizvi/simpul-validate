import { ValidationArgs } from "./interfaces";
import validateType from "./validate.type";
import simpul from "simpul";

function validateTypeValueArray({
  label,
  value: values,
  ...rest
}: ValidationArgs) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      validateType({ label: `${label}: "${value}"`, value, ...rest });
    }
  }
}

export default validateTypeValueArray;
