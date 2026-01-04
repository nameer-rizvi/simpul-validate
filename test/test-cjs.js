const simpul_validate = require("../dist");

const dictionary = [
  {
    key: "test",
    label: "Test",
    isName: { isString: true },
    ignoreSanitizerValidation: true,
  },
];

const options = { custom: { isName: console.log } };

const payload = { test: "<svg><g/onload=alert(2)//<p>" };

simpul_validate(dictionary, options)(payload);

console.log({ payload });
