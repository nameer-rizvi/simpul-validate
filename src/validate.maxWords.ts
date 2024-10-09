import { Validation } from "./util.interfaces";
import simpul from "simpul";

function validateMaxWords({ label, setting, value }: Validation) {
  const words = simpul.stringlength.word(value);
  if (typeof words === "number" && words > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
  }
}

export default validateMaxWords;
