import { Validation } from "./util.interfaces";
import min from "./validate.min";

function validateMinArrayItem({ value: values, ...rest }: Validation) {
  for (const value of values) {
    min({ ...rest, value, label: `${rest.label}: ${value}` });
  }
}

export default validateMinArrayItem;
