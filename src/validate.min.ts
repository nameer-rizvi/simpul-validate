import { Validation } from "./util.interfaces";

function validateMin({ label, setting, value }: Validation) {
  if (value < setting) {
    throw new Error(`${label} must be at least ${setting}.`);
  }
}

export default validateMin;
