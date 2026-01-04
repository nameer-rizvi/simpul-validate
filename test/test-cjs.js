const simpul_validate = require("../dist");

const dictionary = [
  {
    key: "blacklistStringString",
    blacklist: "def",
  },
  {
    key: "blacklistStringArray",
    blacklist: ["d", "e", "f"],
  },
  {
    key: "blacklistArrayString",
    blacklist: "def",
  },
  {
    key: "blacklistArrayArray",
    blacklist: ["d", "e", "f"],
  },
  {
    key: "blacklistKeys",
    blacklistKeys: ["d"],
  },
  // {
  //   key: "match",
  //   match: "value_maxLength",
  // },
  // {
  //   key: "max",
  //   max: 10,
  // },
  // {
  //   key: "maxArrayItem",
  //   maxArrayItem: 3,
  // },
  // {
  //   key: "maxLength",
  //   maxLength: 3,
  // },
  // {
  //   key: "maxLengthArray",
  //   maxLengthArray: 3,
  // },
  // {
  //   key: "maxLengthArrayItem",
  //   maxLengthArrayItem: 3,
  // },
  // {
  //   key: "maxLengthHTML",
  //   maxLengthHTML: 3,
  // },
  // {
  //   key: "maxWords",
  //   maxWords: 3,
  // },
  // {
  //   key: "maxWordsHTML",
  //   maxWordsHTML: 3,
  // },
  // {
  //   key: "min",
  //   min: 3,
  // },
  // {
  //   key: "minArrayItem",
  //   minArrayItem: 3,
  // },
  // {
  //   key: "minLength",
  //   minLength: 3,
  // },
  // {
  //   key: "minLengthArray",
  //   minLengthArray: 3,
  // },
  // {
  //   key: "minLengthArrayItem",
  //   minLengthArrayItem: 3,
  // },
  // {
  //   key: "minLengthHTML",
  //   minLengthHTML: 3,
  // },
  // {
  //   key: "minWords",
  //   minWords: 3,
  // },
  // {
  //   key: "minWordsHTML",
  //   minWordsHTML: 3,
  // },
  // {
  //   key: "regexEmail",
  //   regex: ["email"],
  // },
  // {
  //   key: "regexNoSpecialChar",
  //   regex: ["noSpecialChar"],
  // },
  // {
  //   key: "regexNoWhitespace",
  //   regex: ["noWhitespace"],
  // },
  // {
  //   key: "regexOnlyLetters",
  //   regex: ["onlyLetters"],
  // },
  // {
  //   key: "regexOnlyNumbers",
  //   regex: ["onlyNumbers"],
  // },
  // {
  //   key: "regexWebsite",
  //   regex: ["website"],
  // },
  // {
  //   key: "typeArray",
  //   type: "array",
  // },
  // {
  //   key: "typeBase64",
  //   type: "base64",
  // },
  // {
  //   key: "typeBoolean",
  //   type: "boolean",
  // },
  // {
  //   key: "typeBooleanAny",
  //   type: "booleanAny",
  // },
  // {
  //   key: "typeBooleanNumber",
  //   type: "booleanNumber",
  // },
  // {
  //   key: "typeBooleanString",
  //   type: "booleanString",
  // },
  // {
  //   key: "typeCreditCard",
  //   type: "creditCard",
  // },
  // {
  //   key: "typeDate",
  //   type: "date",
  // },
  // {
  //   key: "typeEmail",
  //   type: "email",
  // },
  // {
  //   key: "typeFunction",
  //   type: "function",
  // },
  // {
  //   key: "typeHttp",
  //   type: "http",
  // },
  // {
  //   key: "typeJson",
  //   type: "json",
  // },
  // {
  //   key: "typeJsonString",
  //   type: "jsonString",
  // },
  // {
  //   key: "typeJwt",
  //   type: "jwt",
  // },
  // {
  //   key: "typeModule",
  //   type: "module",
  // },
  // {
  //   key: "typeNumber",
  //   type: "number",
  // },
  // {
  //   key: "typeObject",
  //   type: "object",
  // },
  // {
  //   key: "typePhoneNumber",
  //   type: "phoneNumber",
  // },
  // {
  //   key: "typeRegex",
  //   type: "regex",
  // },
  // {
  //   key: "typeString",
  //   type: "string",
  // },
  // {
  //   key: "typeStringOrArray",
  //   type: "stringOrArray",
  // },
  // {
  //   key: "typeUrl",
  //   type: "url",
  // },
  // {
  //   key: "typeValid",
  //   type: "valid",
  // },
  // {
  //   key: "typeArrayItem",
  //   typeArrayItem: "number",
  // },
  // {
  //   key: "whitelistStringString",
  //   whitelist: "abc",
  // },
  // {
  //   key: "whitelistStringArray",
  //   whitelist: ["a", "b", "c"],
  // },
  // {
  //   key: "whitelistArrayString",
  //   whitelist: "abc",
  // },
  // {
  //   key: "whitelistArrayArray",
  //   whitelist: ["a", "b", "c"],
  // },
  // {
  //   key: "whitelistKeys",
  //   whitelistKeys: ["a", "b", "c"],
  // },
].map((i) => ({ ...i, key: `value_${i.key}` }));

const payloadPass = {
  blacklistStringString: "abc",
  blacklistStringArray: "abc",
  blacklistArrayString: ["abc"],
  blacklistArrayArray: ["a", "b", "c"],
  blacklistKeys: { a: null, b: null, c: null },
  // match: "abc",
  // max: 10,
  // maxArrayItem: [1, 2, 3],
  // maxLength: "abc",
  // maxLengthArray: [1, 2, 3],
  // maxLengthArrayItem: ["a", "ab", "abc"],
  // maxLengthHTML: "<p>abc</p>",
  // maxWords: "a b c",
  // maxWordsHTML: "<p> a b c </p>",
  // min: 3,
  // minArrayItem: [5, 4, 3],
  // minLength: "123",
  // minLengthArray: [1, 2, 3],
  // minLengthArrayItem: ["abcde", "abcd", "abc"],
  // minLengthHTML: "<p>abc</p>",
  // minWords: "a b c",
  // minWordsHTML: "<p> a b c </p>",
  // regexEmail: "email@email.com",
  // regexNoSpecialChar: "abc123_",
  // regexNoWhitespace: "abc123",
  // regexOnlyLetters: "abc",
  // regexOnlyNumbers: "123",
  // regexWebsite: "http://website.com",
  // typeArray: [],
  // typeBase64: "MQ==",
  // typeBoolean: false,
  // typeBooleanAny: "false",
  // typeBooleanNumber: 0,
  // typeBooleanString: "false",
  // typeCreditCard: [
  //   "4111111111111111", // Visa
  //   "5500000000000004", // MasterCard
  //   "340000000000009", // AMEX
  //   "6011000000000004", // Discover
  // ][0],
  // typeDate: new Date(),
  // typeEmail: "email@email.com",
  // typeFunction: () => {},
  // typeHttp: "http://website.com",
  // typeJson: [],
  // typeJsonString: "[]",
  // typeJwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
  // typeModule: "simpul",
  // typeNumber: 1,
  // typeObject: {},
  // typePhoneNumber: "1111111111",
  // typeRegex: new RegExp(/regexp/),
  // typeString: "abc",
  // typeStringOrArray: [""],
  // typeUrl: "www.website.com",
  // typeValid: "abc",
  // typeArrayItem: [1, 2, 3],
  // whitelistStringString: "abc",
  // whitelistStringArray: "a",
  // whitelistArrayString: ["abc"],
  // whitelistArrayArray: ["a", "b", "c"],
  // whitelistKeys: { a: null, b: null, c: null },
};

const payloadFail = {
  // blacklistStringString: "abcdef",
  // blacklistStringArray: "def",
  // blacklistArrayString: ["def"],
  // blacklistArrayArray: ["d", "e", "f"],
  // blacklistKeys: { a: null, b: null, c: null, d: null },
  // match: "abcd",
  // max: 11,
  // maxArrayItem: [1, 2, 3, 4],
  // maxLength: "abcd",
  // maxLengthArray: [1, 2, 3, 4],
  // maxLengthArrayItem: ["a", "ab", "abc", "abcd"],
  // maxLengthHTML: "<p>abcd</p>",
  // maxWords: "a b c d",
  // maxWordsHTML: "<p> a b c d </p>",
  // min: 2,
  // minArrayItem: [5, 4, 3, 2],
  // minLength: "12",
  // minLengthArray: [1, 2],
  // minLengthArrayItem: ["abcde", "abcd", "abc", "ab"],
  // minLengthHTML: "<p>ab</p>",
  // minWords: "a b",
  // minWordsHTML: "<p> a b </p>",
  // regexEmail: "email",
  // regexNoSpecialChar: "abc123_!",
  // regexNoWhitespace: "abc\n123",
  // regexOnlyLetters: "123",
  // regexOnlyNumbers: "abc",
  // regexWebsite: "website",
  // typeArray: "",
  // typeBase64: 123,
  // typeBoolean: "asd",
  // typeBooleanAny: 123,
  // typeBooleanNumber: "asd",
  // typeBooleanString: 123,
  // typeCreditCard: [
  //   "1234567890123456", // Random number
  //   "411111111111111", // Too short
  //   "5500000000000000000", // Too long
  //   "abcdefg123456789", // Invalid characters
  // ][0],
  // typeDate: "abc",
  // typeEmail: "abc",
  // typeFunction: "abc",
  // typeHttp: "abc",
  // typeJson: () => {},
  // typeJsonString: "]abc[",
  // typeJwt: "abc",
  // typeModule: "abc",
  // typeNumber: "abc",
  // typeObject: "abc",
  // typePhoneNumber: "abc",
  // typeRegex: "abc",
  // typeString: 123,
  // typeStringOrArray: 123,
  // typeUrl: "abc",
  // typeValid: null,
  // typeArrayItem: ["a", "b", "c"],
  // whitelistStringString: "abcd",
  // whitelistStringArray: "ab",
  // whitelistArrayString: ["abc", "d"],
  // whitelistArrayArray: ["a", "b", "c", "d"],
  // whitelistKeys: { a: null, b: null, c: null, d: null },
};

changeKey(payloadPass);

changeKey(payloadFail);

Object.assign(payloadPass, payloadFail);

try {
  const requiredKeys = dictionary.map((i) => i.key);
  simpul_validate(dictionary)(payloadPass, requiredKeys);
  console.log(payloadPass);
} catch (error) {
  console.error(error);
}

function changeKey(payload) {
  Object.keys(payload).forEach((key) => {
    payload[`value_${key}`] = payload[key];
    delete payload[key];
  });
}
