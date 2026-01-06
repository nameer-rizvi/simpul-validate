import { ValidationOptions } from "./interfaces";
import validateMax from "./validate.max";
import simpul from "simpul";

function validateMaxValueArray({
  label,
  value: values,
  ...rest
}: ValidationOptions) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      validateMax({ label: `${label}: "${value}"`, value, ...rest });
    }
  }
}

export default validateMaxValueArray;
