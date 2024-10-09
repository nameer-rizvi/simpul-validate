const simpul_validate = require("../dist");

// settings
const dictionary = [
  {
    key: "match",
    match: "value_maxLength",
  },
  {
    key: "max",
    max: 10,
  },
  {
    key: "maxArrayItem",
    maxArrayItem: 3,
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
    key: "maxLengthArrayItem",
    maxLengthArrayItem: 3,
  },
  {
    key: "maxLengthHTML",
    maxLengthHTML: 3,
  },
  {
    key: "maxWords",
    maxWords: 3,
  },
  {
    key: "maxWordsHTML",
    maxWordsHTML: 3,
  },
  {
    key: "min",
    min: 3,
  },
  {
    key: "minArrayItem",
    minArrayItem: 3,
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
    key: "minLengthArrayItem",
    minLengthArrayItem: 3,
  },
  {
    key: "minLengthHTML",
    minLengthHTML: 3,
  },
  {
    key: "minWords",
    minWords: 3,
  },
  {
    key: "minWordsHTML",
    minWordsHTML: 3,
  },
  {
    key: "regexEmail",
    regex: ["email"],
  },
  {
    key: "regexNoSpecialChar",
    regex: ["noSpecialChar"],
  },
  {
    key: "regexNoWhitespace",
    regex: ["noWhitespace"],
  },
  {
    key: "regexOnlyLetters",
    regex: ["onlyLetters"],
  },
  {
    key: "regexOnlyNumbers",
    regex: ["onlyNumbers"],
  },
  {
    key: "regexWebsite",
    regex: ["website"],
  },
  {
    key: "whitelistStringString",
    whitelist: "abc",
  },
  {
    key: "whitelistStringArray",
    whitelist: ["a", "b", "c"],
  },
  {
    key: "whitelistArrayString",
    whitelist: "abc",
  },
  {
    key: "whitelistArrayArray",
    whitelist: ["a", "b", "c"],
  },
  {
    key: "whitelistKeys",
    whitelistKeys: ["a", "b", "c"],
  },
].map((i) => ({ ...i, key: `value_${i.key}` }));

// required keys
const required = dictionary.map((i) => i.key);

// values - pass
const payloadPass = {
  match: "abc",
  max: 10,
  maxArrayItem: [1, 2, 3],
  maxLength: "abc",
  maxLengthArray: [1, 2, 3],
  maxLengthArrayItem: ["a", "ab", "abc"],
  maxLengthHTML: "<p>abc</p>",
  maxWords: "a b c",
  maxWordsHTML: "<p> a b c </p>",
  min: 3,
  minArrayItem: [5, 4, 3],
  minLength: "123",
  minLengthArray: [1, 2, 3],
  minLengthArrayItem: ["abcde", "abcd", "abc"],
  minLengthHTML: "<p>abc</p>",
  minWords: "a b c",
  minWordsHTML: "<p> a b c </p>",
  regexEmail: "email@email.com",
  regexNoSpecialChar: "abc123_",
  regexNoWhitespace: "abc123",
  regexOnlyLetters: "abc",
  regexOnlyNumbers: "123",
  regexWebsite: "http://website.com",
  whitelistStringString: "abc",
  whitelistStringArray: "a",
  whitelistArrayString: ["abc"],
  whitelistArrayArray: ["a", "b", "c"],
  whitelistKeys: { a: null, b: null, c: null },
};

// values - fail
const payloadFail = {
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
  // whitelistStringString: "abcd",
  // whitelistStringArray: "ab",
  // whitelistArrayString: ["abc", "d"],
  // whitelistArrayArray: ["a", "b", "c", "d"],
  whitelistKeys: { a: null, b: null, c: null, d: null },
};

// values injection

changeKey(payloadPass);

changeKey(payloadFail);

Object.assign(payloadPass, payloadFail);

// try simpul validate
try {
  simpul_validate(dictionary)(payloadPass, required);
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
