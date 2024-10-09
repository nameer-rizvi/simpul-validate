import { Validation } from "./util.interfaces";

function validateMinLengthArray({ label, setting, value }: Validation) {
  if (value.length < setting) {
    throw new Error(`${label} must be at least ${setting} items.`);
  }
}

export default validateMinLengthArray;
