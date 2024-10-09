import { Validation } from "./util.interfaces";

function validateMax({ label, setting, value }: Validation) {
  if (value > setting) {
    throw new Error(`${label} must be less than or equal to ${setting}.`);
  }
}

export default validateMax;
