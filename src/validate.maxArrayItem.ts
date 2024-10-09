import { Validation } from "./util.interfaces";
import max from "./validate.max";

function validateMaxArrayItem({ value: values, ...rest }: Validation) {
  for (const value of values) {
    max({ ...rest, value, label: `${rest.label}: ${value}` });
  }
}

export default validateMaxArrayItem;
