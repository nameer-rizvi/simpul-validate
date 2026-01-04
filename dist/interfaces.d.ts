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
