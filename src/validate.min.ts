import { Validation } from "./util.interfaces";

function validateMin({ label, setting, value }: Validation) {
  if (value < setting) {
    throw new Error(`${label} must be greater than or equal to ${setting}.`);
  }
}

export default validateMin;
