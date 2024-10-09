import { Validation } from "./util.interfaces";
import * as stringStripHtml from "string-strip-html";
import simpul from "simpul";

function validateMaxWordsHTML({ label, setting, value }: Validation) {
  const string = stringStripHtml.stripHtml(value).result;
  const words = simpul.stringlength.word(string);
  if (typeof words === "number" && words > setting) {
    throw new Error(`${label} must be less than or equal to ${setting} words.`);
  }
}

export default validateMaxWordsHTML;
