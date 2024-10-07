import { Object, DictionaryItem } from "./util.interfaces";
declare function sanitize(payload: Object, dictionary: DictionaryItem[], domPurifyOptions?: Object): void;
export default sanitize;
