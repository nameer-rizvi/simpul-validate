import { Definition, Options, Object } from "./util.interfaces";
declare function initializer(dictionary: Definition[], option?: Options): (payload: undefined | Object, required: string[]) => void;
export = initializer;
