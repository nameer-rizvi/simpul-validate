export interface Definition {
  key: string;
  label?: string;
  ignoreSanitizer?: boolean;
  ignoreSanitizerValidation?: boolean;
  // [key: string]: any;
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
