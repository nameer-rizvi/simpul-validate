const initializeValidate = require("./index");

const dictionary = [
  {
    key: "formValue",
    label: "Array value",
    type: "array",
    whitelistArray: ["asd", "fgh"],
  },
];

try {
  const sanitizedPayload = initializeValidate(dictionary)(payload, [
    "formValue",
  ]);
  console.log({ sanitizedPayload });
} catch (error) {
  console.log({ error: error.toString() });
}

initializeValidate(dictionary, { async: true })(payload, ["formValue"])
  .then((sanitizedPayload) => console.log({ sanitizedPayload }))
  .catch((error) => console.log({ error: error.toString() }));
