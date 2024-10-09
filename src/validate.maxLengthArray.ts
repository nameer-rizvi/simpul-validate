import { Validation } from "./util.interfaces";

function validateMaxLengthArray({ label, setting, value }: Validation) {
  if (value.length > setting) {
    const error = `${label} must be less than or equal to ${setting} items.`;
    throw new Error(error);
  }
}

export default validateMaxLengthArray;
