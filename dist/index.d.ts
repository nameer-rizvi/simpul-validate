import { DictionaryItem, Options, Object } from "./util.interfaces";
declare function initializer(dictionary?: DictionaryItem[], option?: Options): (payload: Object | undefined, required: string[]) => void;
export = initializer;
