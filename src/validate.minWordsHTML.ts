import { Validation } from "./util.interfaces";
import * as stringStripHtml from "string-strip-html";
import simpul from "simpul";

function validateMinWordsHTML({ label, setting, value }: Validation) {
  const string = stringStripHtml.stripHtml(value).result;
  const words = simpul.stringlength.word(string);
  if (typeof words === "number" && words < setting) {
    throw new Error(`${label} must be at least ${setting} words.`);
  }
}

export default validateMinWordsHTML;
