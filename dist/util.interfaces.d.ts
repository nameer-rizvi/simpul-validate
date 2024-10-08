export interface Definition {
    key: string;
    label?: string;
    blacklist?: string | string[] | {
        exact?: string | string[];
        loose?: string | string[];
    };
    ignoreSanitizer?: boolean;
    ignoreSanitizerValidation?: boolean;
}
export interface Options {
    custom?: object;
    domPurifyOptions?: object;
}
export interface Object {
    [key: string]: any;
}
export interface Validation {
    setting: any;
    value: any;
    label: string;
    match?: string;
    matchLabel?: string;
}
