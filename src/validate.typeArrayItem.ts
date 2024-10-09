import { Validation } from "./util.interfaces";
import validateType from "./validate.type";

function validateTypeArrayItem({ value: values, ...rest }: Validation) {
  for (const value of values) {
    const label = `${rest.label}: ${JSON.stringify(value)}`;
    validateType({ ...rest, value, label });
  }
}

export default validateTypeArrayItem;
