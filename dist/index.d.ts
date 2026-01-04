import { Definition, Options, PayloadObject, RequiredList } from "./interfaces";
declare function initializer(dictionary: Definition[], option?: Options): (payload?: PayloadObject, required?: RequiredList) => void;
export = initializer;
