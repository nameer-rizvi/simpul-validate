import { ValidationOptions } from "./interfaces";
import simpul from "simpul";

function validateMin({ label, setting, value }: ValidationOptions) {
  if (simpul.isNumber(value) && simpul.isNumber(setting)) {
    if (value < setting) {
      const parts = label.split(simpul.delimiter);
      const end = parts[1] ? ` ${parts[1]}.` : ".";
      const error = `${parts[0]} must be at least ${setting}${end}`;
      throw new Error(error);
    }
  }
}

export default validateMin;
