import { Validation } from "./util.interfaces";
import minLength from "./validate.minLength";

function validateMinLengthArrayItem({ value: values, ...rest }: Validation) {
  for (const value of values) {
    minLength({ ...rest, value, label: `${rest.label}: "${value}"` });
  }
}

export default validateMinLengthArrayItem;
