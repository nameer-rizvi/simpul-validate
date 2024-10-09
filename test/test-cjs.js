const simpul_validate = require("../dist");

// settings
const dictionary = [
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
].map((i) => ({ ...i, key: `value_${i.key}` }));

// required keys
const required = dictionary.map((i) => i.key);

// values - pass
const payloadPass = {
  max: 10,
  maxArrayItem: [1, 2, 3],
  maxLength: "abc",
  maxLengthArray: [1, 2, 3],
  maxLengthArrayItem: ["a", "ab", "abc"],
};

// values - fail
const payloadFail = {
  // max: 11,
  // maxArrayItem: [1, 2, 3, 4],
  // maxLength: "abcd",
  // maxLengthArray: [1, 2, 3, 4],
  // maxLengthArrayItem: ["a", "ab", "abc", "abcd"],
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
