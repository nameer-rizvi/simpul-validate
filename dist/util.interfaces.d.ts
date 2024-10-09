export interface Definition {
    key: string;
    label?: string;
    blacklist?: string | string[];
    blacklistKeys?: string | string[];
    match?: string;
    max?: number;
    maxArrayItem?: number;
    maxLength?: number;
    maxLengthArray?: number;
    maxLengthArrayItem?: number;
    maxLengthHTML?: number;
    maxWords?: number;
    maxWordsHTML?: number;
    min?: number;
    minArrayItem?: number;
    minLength?: number;
    minLengthArray?: number;
    minLengthArrayItem?: number;
    minLengthHTML?: number;
    minWords?: number;
    minWordsHTML?: number;
    regex?: ("email" | "noSpecialChar" | "noWhitespace" | "onlyLetters" | "onlyNumbers" | "website" | {
        r: RegExp;
        warning?: string;
    })[];
    type?: "array" | "base64" | "boolean" | "booleanAny" | "booleanNumber" | "booleanString" | "creditCard" | "date" | "email" | "function" | "http" | "json" | "jsonString" | "jwt" | "module" | "number" | "object" | "phoneNumber" | "regex" | "string" | "stringOrArray" | "url" | "valid";
    typeArrayItem?: "array" | "base64" | "boolean" | "booleanAny" | "booleanNumber" | "booleanString" | "creditCard" | "date" | "email" | "function" | "http" | "json" | "jsonString" | "jwt" | "module" | "number" | "object" | "phoneNumber" | "regex" | "string" | "stringOrArray" | "url" | "valid";
    whitelist?: string | string[];
    whitelistKeys?: string | string[];
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
