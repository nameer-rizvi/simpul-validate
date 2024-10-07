export interface DictionaryItem {
    key: string;
    label?: string;
    ignoreSanitizer?: boolean;
}
export interface Options {
    domPurifyOptions?: object;
}
export interface Object {
    [key: string]: any;
}
