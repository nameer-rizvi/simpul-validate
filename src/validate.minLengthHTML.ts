import { Validation } from "./util.interfaces";
import * as stringStripHtml from "string-strip-html";

function validateMinLengthHTML({ label, setting, value }: Validation) {
  if (stringStripHtml.stripHtml(value).result.length < setting) {
    throw new Error(`${label} must be at least ${setting} characters.`);
  }
}

export default validateMinLengthHTML;
