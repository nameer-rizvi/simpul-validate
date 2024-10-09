import { Validation } from "./util.interfaces";

function validateWhitelist({ label, setting, value }: Validation) {
  if (typeof value === "string" && typeof setting === "string") {
    if (value !== setting) throwError(label, value);
  } else if (typeof value === "string" && Array.isArray(setting)) {
    if (!setting.includes(value)) throwError(label, value);
  } else if (Array.isArray(value) && typeof setting === "string") {
    const v = value.find((i) => i !== setting);
    if (v) throwError(label, v);
  } else if (Array.isArray(value) && Array.isArray(setting)) {
    const v = value.find((i) => !setting.includes(i));
    if (v) throwError(label, v);
  }
}

function throwError(label: string, v: string) {
  throw new Error(`${label}: "${v}" is not an acceptable value.`);
}

export default validateWhitelist;
