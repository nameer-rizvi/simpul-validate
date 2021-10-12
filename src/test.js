const initializeValidate = require("./index");

const dictionary = [
  { key: "formValue", label: "String value", type: "string" },
];

const payload = { formValue: "" };

const required = ["formValue"];

try {
  const sanitizedPayload = initializeValidate(dictionary)(payload, required);
  console.log({ sanitizedPayload });
} catch (error) {
  console.log({ error: error.toString() });
}

initializeValidate(dictionary, { async: true })(payload, required)
  .then((sanitizedPayload) => console.log({ sanitizedPayload }))
  .catch((error) => console.log({ error: error.toString() }));
