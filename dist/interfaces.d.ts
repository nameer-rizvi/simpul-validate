import DOMPurify from "isomorphic-dompurify";
export type DefinitionMap = Map<string, Definition>;
export type PayloadObject = Record<string, any>;
export type RequiredList = readonly string[];
export type StringOrArray<T = string> = T | readonly T[];
export type ValidationResolver = Record<string, (args: ValidationArgs) => void>;
export interface Definition {
    readonly key: string;
    readonly label?: string;
    readonly ignoreSanitizer?: boolean;
    readonly ignoreSanitizerValidation?: boolean;
    readonly blacklist?: StringOrArray;
    readonly blacklistKeys?: StringOrArray;
    readonly match?: string;
    readonly max?: number;
    readonly maxLength?: number;
    readonly maxLengthArray?: number;
    readonly maxLengthString?: number;
    readonly maxLengthHtml?: number;
    readonly maxLengthValueArray?: number;
    readonly maxLengthValueObject?: number;
    readonly maxValueArray?: number;
    readonly maxValueObject?: number;
    readonly maxWords?: number;
    readonly maxWordsHtml?: number;
    readonly min?: number;
    readonly minLength?: number;
    readonly minLengthArray?: number;
    readonly minLengthString?: number;
    readonly minLengthHtml?: number;
    readonly minLengthValueArray?: number;
    readonly minLengthValueObject?: number;
    readonly minValueArray?: number;
    readonly minValueObject?: number;
    readonly minWords?: number;
    readonly minWordsHtml?: number;
}
export interface Options {
    readonly custom?: ValidationResolver;
    readonly domPurifyOptions?: DOMPurify.Config;
}
export interface ValidationArgs {
    readonly setting: unknown;
    readonly value: unknown;
    readonly label: string;
    readonly match?: unknown;
    readonly matchLabel?: string;
}
