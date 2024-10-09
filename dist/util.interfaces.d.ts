export interface Definition {
    key: string;
    label?: string;
    max?: number;
    maxArrayItem?: number;
    maxLength?: number;
    maxLengthArray?: number;
    maxLengthArrayItem?: number;
    maxLengthHTML?: number;
    maxWords?: number;
    maxWordsHTML?: number;
    min?: number;
    ignoreSanitizer?: boolean;
    ignoreSanitizerValidation?: boolean;
}
export interface Validation {
    setting: any;
    value: any;
    label: string;
    match?: string;
    matchLabel?: string;
}
export interface Options {
    custom?: object;
    domPurifyOptions?: object;
}
export interface Object {
    [key: string]: any;
}
