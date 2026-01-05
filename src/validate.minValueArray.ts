import { ValidationArgs } from "./interfaces";
import validateMin from "./validate.min";
import simpul from "simpul";

function validateMinValueArray({
  label,
  value: values,
  ...rest
}: ValidationArgs) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      validateMin({ label: `${label}: "${value}"`, value, ...rest });
    }
  }
}

export default validateMinValueArray;
