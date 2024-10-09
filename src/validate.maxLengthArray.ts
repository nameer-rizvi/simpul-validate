import { Validation } from "./util.interfaces";

function validateMaxLengthArray({ label, setting, value }: Validation) {
  if (value.length > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} items.`);
  }
}

export default validateMaxLengthArray;
