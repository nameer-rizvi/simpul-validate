import { ValidationArgs } from "./interfaces";
import max from "./validate.max";
import simpul from "simpul";

function validateMaxArrayItem({ value: values, ...rest }: ValidationArgs) {
  if (simpul.isArray(values)) {
    for (const value of values) {
      max({ ...rest, value, label: `${rest.label}: ${value}` });
    }
  }
}

export default validateMaxArrayItem;
