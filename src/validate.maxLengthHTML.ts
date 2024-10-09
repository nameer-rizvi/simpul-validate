import { Validation } from "./util.interfaces";
import * as stringStripHtml from "string-strip-html";

function validateMaxLengthHTML({ label, setting, value }: Validation) {
  if (stringStripHtml.stripHtml(value).result.length > setting) {
    const error = `${label} must be less than or equal to ${setting} characters.`;
    throw new Error(error);
  }
}

export default validateMaxLengthHTML;
