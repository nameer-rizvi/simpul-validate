import { Validation } from "./util.interfaces";

function validateMaxLength({ label, setting, value }: Validation) {
  if (value.length > setting) {
    const error = `${label} must be less than or equal to ${setting} characters.`;
    throw new Error(error);
  }
}

export default validateMaxLength;
