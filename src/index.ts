import { DictionaryItem, Options, Object } from "./util.interfaces";
import simpul from "simpul";
import isRequired from "./util.isRequired";
import sanitize from "./util.sanitize";

function initializer(dictionary: DictionaryItem[] = [], option: Options = {}) {
  if (!simpul.isArray(dictionary)) {
    throw new Error("Dictionary must be an array.");
  }

  dictionary = dictionary.filter(simpul.isObject);

  return function validator(payload: Object = {}, required: string[]): void {
    if (!simpul.isObject(payload)) {
      throw new Error("Payload must be an object.");
    }

    // validate(payload, dictionary, option);

    isRequired(payload, dictionary, required);

    sanitize(payload, dictionary, option.domPurifyOptions);
  };
}

export = initializer;
