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
  // readonly match?: string;
  // readonly min?: number;
  // readonly max?: number;
  // readonly minArrayItem?: number;
  // readonly maxArrayItem?: number;
  // readonly minLength?: number;
  // readonly maxLength?: number;
  // readonly minLengthArray?: number;
  // readonly maxLengthArray?: number;
  // readonly minLengthArrayItem?: number;
  // readonly maxLengthArrayItem?: number;
  // readonly minLengthHTML?: number;
  // readonly maxLengthHTML?: number;
  // readonly minWords?: number;
  // readonly maxWords?: number;
  // readonly minWordsHTML?: number;
  // readonly maxWordsHTML?: number;
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
