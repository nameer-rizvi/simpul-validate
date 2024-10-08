import { Definition, Options, Object } from "./util.interfaces";
declare function initializer(dictionary: Definition[], option?: Options): (payload: Object, required: string[]) => void;
export = initializer;
