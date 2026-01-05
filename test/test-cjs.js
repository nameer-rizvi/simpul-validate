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
  {
    key: "match",
    match: "test_blacklistStringString",
  },
  {
    key: "max",
    max: 10,
  },
  {
    key: "maxLength",
    maxLength: 3,
  },
  {
    key: "maxLengthArray",
    maxLengthArray: 3,
  },
  {
    key: "maxLengthString",
    maxLengthString: 3,
  },
  {
    key: "maxLengthHtml",
    maxLengthHtml: 3,
  },
  {
    key: "maxLengthValueArray",
    maxLengthValueArray: 3,
  },
  {
    key: "maxLengthValueObject",
    maxLengthValueObject: 3,
  },
  {
    key: "maxValueArray",
    maxValueArray: 3,
  },
  {
    key: "maxValueObject",
    maxValueObject: 3,
  },
  {
    key: "maxWords",
    maxWords: 3,
  },
  {
    key: "maxWordsHtml",
    maxWordsHtml: 3,
  },
  {
    key: "min",
    min: 3,
  },
  {
    key: "minLength",
    minLength: 3,
  },
  {
    key: "minLengthArray",
    minLengthArray: 3,
  },
  {
    key: "minLengthString",
    minLengthString: 3,
  },
  {
    key: "minLengthHtml",
    minLengthHtml: 3,
  },
  {
    key: "minLengthValueArray",
    minLengthValueArray: 3,
  },
  {
    key: "minLengthValueObject",
    minLengthValueObject: 3,
  },
  {
    key: "minValueArray",
    minValueArray: 3,
  },
  {
    key: "minValueObject",
    minValueObject: 3,
  },
  {
    key: "minWords",
    minWords: 3,
  },
  {
    key: "minWordsHtml",
    minWordsHtml: 3,
  },
  {
    key: "regex-alphaNumeric",
    regex: ["alphaNumeric"],
  },
  {
    key: "regex-countryCode",
    regex: ["countryCode"],
  },
  {
    key: "regex-creditCard",
    regex: ["creditCard"],
  },
  {
    key: "regex-currencyAmount",
    regex: ["currencyAmount"],
  },
  {
    key: "regex-displayName",
    regex: ["displayName"],
  },
  {
    key: "regex-email",
    regex: ["email"],
  },
  {
    key: "regex-hexColor",
    regex: ["hexColor"],
  },
  {
    key: "regex-ipv4",
    regex: ["ipv4"],
  },
  {
    key: "regex-noEmoji",
    regex: ["noEmoji"],
  },
  {
    key: "regex-noHTML",
    regex: ["noHTML"],
  },
  {
    key: "regex-noSpecialChar",
    regex: ["noSpecialChar"],
  },
  {
    key: "regex-noWhitespace",
    regex: ["noWhitespace"],
  },
  {
    key: "regex-onlyLetters",
    regex: ["onlyLetters"],
  },
  {
    key: "regex-onlyNumbers",
    regex: ["onlyNumbers"],
  },
  {
    key: "regex-phoneNumber",
    regex: ["phoneNumber"],
  },
  {
    key: "regex-pinCode",
    regex: ["pinCode"],
  },
  {
    key: "regex-postalCodeUS",
    regex: ["postalCodeUS"],
  },
  {
    key: "regex-slug",
    regex: ["slug"],
  },
  {
    key: "regex-strongPassword",
    regex: ["strongPassword"],
  },
  {
    key: "regex-trimmed",
    regex: ["trimmed"],
  },
  {
    key: "regex-username",
    regex: ["username"],
  },
  {
    key: "regex-uuidV4",
    regex: ["uuidV4"],
  },
  {
    key: "regex-website",
    regex: ["website"],
  },
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
].map((i) => ({ ...i, key: `test_${i.key}` }));

const payloadPass = {
  blacklistStringString: "abc",
  blacklistStringArray: "abc",
  blacklistArrayString: ["abc"],
  blacklistArrayArray: ["a", "b", "c"],
  blacklistKeys: { a: null, b: null, c: null },
  match: "abc",
  max: 10,
  maxLength: "abc",
  maxLengthArray: [1, 2, 3],
  maxLengthString: "abc",
  maxLengthHtml: "<p>abc</p>",
  maxLengthValueArray: ["a", "ab", "abc"],
  maxLengthValueObject: { key1: "a", key2: "ab", key3: "abc" },
  maxValueArray: [1, 2, 3],
  maxValueObject: { key1: 1, key2: 2, key3: 3 },
  maxWords: "a b c",
  maxWordsHtml: "<p> a b c </p>",
  min: 3,
  minLength: "abc",
  minLengthArray: [1, 2, 3],
  minLengthString: "abc",
  minLengthHtml: "<p>abc</p>",
  minLengthValueArray: ["abc", "abcd"],
  minLengthValueObject: { key1: "abc", key2: "abcd" },
  minValueArray: [3, 4],
  minValueObject: { key1: 3, key2: 4 },
  minWords: "a b c",
  minWordsHtml: "<p> a b c </p>",
  "regex-alphaNumeric": "User123",
  "regex-countryCode": "US",
  "regex-creditCard": "4242424242424242",
  "regex-currencyAmount": "19.99",
  "regex-displayName": "John Doe",
  "regex-email": "john.doe+test@gmail.com",
  "regex-hexColor": "#1A2B3C",
  "regex-ipv4": "192.168.1.1",
  "regex-noEmoji": "Hello world!",
  "regex-noHTML": "Just plain text",
  "regex-noSpecialChar": "User_Name123",
  "regex-noWhitespace": "NoSpacesHere",
  "regex-onlyLetters": "Alphabet",
  "regex-onlyNumbers": "123456",
  "regex-phoneNumber": "+14155552671",
  "regex-pinCode": "1234",
  "regex-postalCodeUS": "12345-6789",
  "regex-slug": "my-awesome-slug",
  "regex-strongPassword": "Str0ng!Passw0rd",
  "regex-trimmed": "Trimmed text",
  "regex-username": "user_name_1",
  "regex-uuidV4": "550e8400-e29b-41d4-a716-446655440000",
  "regex-website": "https://www.example.com",
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
  // maxLength: "abcd",
  // maxLengthArray: [1, 2, 3, 4],
  // maxLengthString: "abcd",
  // maxLengthHtml: "<p>abcd</p>",
  // maxLengthValueArray: ["a", "ab", "abc", "abcd"],
  // maxLengthValueObject: { key1: "a", key2: "ab", key3: "abc", key4: "abcd" },
  // maxValueArray: [1, 2, 3, 4],
  // maxValueObject: { key1: 1, key2: 2, key3: 3, key4: 4 },
  // maxWords: "a b c d",
  // maxWordsHtml: "<p> a b c d </p>",
  // min: 2,
  // minLength: "ab",
  // minLengthArray: [1, 2],
  // minLengthString: "ab",
  // minLengthHtml: "<p>ab</p>",
  // minLengthValueArray: ["ab", "abc", "abcd"],
  // minLengthValueObject: { key1: "ab", key2: "abc", key3: "abcd" },
  // minValueArray: [2, 3, 4],
  // minValueObject: { key1: 2, key2: 3, key3: 4 },
  // minWords: "a b",
  // minWordsHtml: "<p> a b </p>",
  // "regex-alphaNumeric": "User_123",
  // "regex-countryCode": "USA",
  // "regex-creditCard": "4242-4242-4242-4242",
  // "regex-currencyAmount": "19.9",
  // "regex-displayName": "(John123+",
  // "regex-email": "john.doe@@gmail.com",
  // "regex-hexColor": "#12FG34",
  // "regex-ipv4": "999.168.1.1",
  // "regex-noEmoji": "Hello 👋",
  // "regex-noHTML": "<b>Hello</b>",
  // "regex-noSpecialChar": "User@Name",
  // "regex-noWhitespace": "Has\nSpace",
  // "regex-onlyLetters": "Alpha123",
  // "regex-onlyNumbers": "123abc",
  // "regex-phoneNumber": "+0123456789",
  // "regex-pinCode": "12a4",
  // "regex-postalCodeUS": "1234",
  // "regex-slug": "My-Awesome-Slug",
  // "regex-strongPassword": "password123",
  // "regex-trimmed": "  Leading space",
  // "regex-username": "1username",
  // "regex-uuidV4": "550e8400-e29b-11d4-a716-446655440000",
  // "regex-website": "htp://example..com",
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
    payload[`test_${key}`] = payload[key];
    delete payload[key];
  });
}
