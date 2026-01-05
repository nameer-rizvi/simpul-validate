import { ValidationArgs } from "./interfaces";
import simpul from "simpul";

function validateMax({ label, setting, value }: ValidationArgs) {
  if (simpul.isNumber(value) && simpul.isNumber(setting)) {
    if (value > setting) {
      const parts = label.split(simpul.delimiter);
      const end = parts[1] ? ` ${parts[1]}.` : ".";
      const error = `${parts[0]} must be less than or equal to ${setting}${end}`;
      throw new Error(error);
    }
  }
}

export default validateMax;
