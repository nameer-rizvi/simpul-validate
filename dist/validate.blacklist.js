"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateBlacklist({ label, setting, value }) {
    let term;
    if (typeof value === "string" && typeof setting === "string") {
        if (value.trim() === setting)
            term = setting;
    }
    else if (typeof value === "string" && Array.isArray(setting)) {
        term = setting.find((set) => value.trim() === set);
    }
    else if (typeof value === "string" && typeof setting === "object") {
        if (typeof setting.exact === "string") {
            if (value === setting.exact)
                term = setting.exact;
        }
        else if (typeof setting.loose === "string") {
            if (value.toLowerCase().includes(setting.loose.toLowerCase()))
                term = setting.loose;
        }
        else if (Array.isArray(setting.exact)) {
            term = setting.exact.find((set) => value === set);
        }
        else if (Array.isArray(setting.loose)) {
            term = setting.loose.find((set) => {
                return value.toLowerCase().includes(set.toLowerCase());
            });
        }
    }
    else if (Array.isArray(value) && typeof setting === "string") {
        if (value.some((v) => v.trim() === setting))
            term = setting;
    }
    else if (Array.isArray(value) && Array.isArray(setting)) {
        term = setting.find((set) => value.some((v) => v.trim() === set));
    }
    else if (Array.isArray(value) && typeof setting === "object") {
        if (typeof setting.exact === "string") {
            if (value.some((v) => v === setting.exact))
                term = setting.exact;
        }
        else if (typeof setting.loose === "string") {
            if (value.some((v) => v.toLowerCase().includes(setting.loose.toLowerCase())))
                term = setting.loose;
        }
        else if (Array.isArray(setting.exact)) {
            term = setting.exact.find((set) => value.some((v) => v === set));
        }
        else if (Array.isArray(setting.loose)) {
            term = setting.loose.find((set) => {
                return value.some((v) => v.toLowerCase().includes(set.toLowerCase()));
            });
        }
    }
    if (term)
        throw new Error(`${label}: "${term}" is a reserved term.`);
}
exports.default = validateBlacklist;
