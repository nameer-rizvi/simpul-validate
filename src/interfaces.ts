import DOMPurify from "isomorphic-dompurify"; // via "sanitized"

/*
 * --> Types
 */

export type DefinitionMap = Map<string, Definition>;

export type PayloadObject = Record<string, any>;

export type RequiredList = readonly string[];

export type StringOrArray<T = string> = T | readonly T[];

export type ValidationResolver = Record<string, (args: ValidationArgs) => void>;

/*
 * --> Interfaces
 */

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
  // readonly regex?: readonly RegexRule[];
  // readonly type?: ValueType;
  // readonly typeArrayItem?: ValueType;
  // readonly whitelist?: StringOrArray;
  // readonly whitelistKeys?: StringOrArray;
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

// ...
// ...
// ...

// export type RegexRule =
//   | "email"
//   | "noSpecialChar"
//   | "noWhitespace"
//   | "onlyLetters"
//   | "onlyNumbers"
//   | "website"
//   | { r: RegExp; warning?: string };

// export type ValueType =
//   | "array"
//   | "base64"
//   | "boolean"
//   | "booleanAny"
//   | "booleanNumber"
//   | "booleanString"
//   | "creditCard"
//   | "date"
//   | "email"
//   | "function"
//   | "http"
//   | "json"
//   | "jsonString"
//   | "jwt"
//   | "module"
//   | "number"
//   | "object"
//   | "phoneNumber"
//   | "regex"
//   | "string"
//   | "stringOrArray"
//   | "url"
//   | "valid";

// regex?: (
//   | "email"
//   | "noSpecialChar"
//   | "noWhitespace"
//   | "onlyLetters"
//   | "onlyNumbers"
//   | "website"
//   | { r: RegExp; warning?: string }
// )[];
// type?:
//   | "array"
//   | "base64"
//   | "boolean"
//   | "booleanAny"
//   | "booleanNumber"
//   | "booleanString"
//   | "creditCard"
//   | "date"
//   | "email"
//   | "function"
//   | "http"
//   | "json"
//   | "jsonString"
//   | "jwt"
//   | "module"
//   | "number"
//   | "object"
//   | "phoneNumber"
//   | "regex"
//   | "string"
//   | "stringOrArray"
//   | "url"
//   | "valid";
// typeArrayItem?:
//   | "array"
//   | "base64"
//   | "boolean"
//   | "booleanAny"
//   | "booleanNumber"
//   | "booleanString"
//   | "creditCard"
//   | "date"
//   | "email"
//   | "function"
//   | "http"
//   | "json"
//   | "jsonString"
//   | "jwt"
//   | "module"
//   | "number"
//   | "object"
//   | "phoneNumber"
//   | "regex"
//   | "string"
//   | "stringOrArray"
//   | "url"
//   | "valid";
