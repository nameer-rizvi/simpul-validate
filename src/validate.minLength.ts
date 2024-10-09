import { Validation } from "./util.interfaces";

function validateMinLength({ label, setting, value }: Validation) {
  if (value.length < setting) {
    throw new Error(`${label} must be at least ${setting} characters.`);
  }
}

export default validateMinLength;
