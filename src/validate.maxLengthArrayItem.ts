import { Validation } from "./util.interfaces";
import maxLength from "./validate.maxLength";

function validateMaxLengthArrayItem({ value: values, ...rest }: Validation) {
  for (const value of values) {
    maxLength({ ...rest, value, label: `${rest.label}: "${value}"` });
  }
}

export default validateMaxLengthArrayItem;
