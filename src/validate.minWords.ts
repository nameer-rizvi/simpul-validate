import { Validation } from "./util.interfaces";
import simpul from "simpul";

function validateMinWords({ label, setting, value }: Validation) {
  const words = simpul.stringlength.word(value);
  if (typeof words === "number" && words < setting) {
    throw new Error(`${label} must be at least ${setting} words.`);
  }
}

export default validateMinWords;
