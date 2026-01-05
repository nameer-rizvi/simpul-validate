import { ValidationArgs } from "./interfaces";
import simpul from "simpul";

function validateMax({ label, setting, value }: ValidationArgs) {
  if (simpul.isNumber(value) && simpul.isNumber(setting)) {
    if (value > setting) {
      throw new Error(`${label} must be less than or equal to ${setting}.`);
    }
  }
}

export default validateMax;
