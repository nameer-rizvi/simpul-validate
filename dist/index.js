"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const simpul_1 = __importDefault(require("simpul"));
const sanitized_1 = __importDefault(require("sanitized"));
const stringStripHtml = __importStar(require("string-strip-html"));
const validate_index_1 = __importDefault(require("./validate.index"));
function initializer(dictionary, option = {}) {
    const defMap = new Map();
    for (const definition of dictionary) {
        if (typeof definition === "object" && definition !== null) {
            const label = definition.label || definition.key || "";
            defMap.set(definition.key, Object.freeze(Object.assign(Object.assign({}, definition), { label })));
        }
    }
    const validationResolver = Object.freeze(Object.assign(Object.assign({}, validate_index_1.default), option.custom));
    return function validator(payload, required) {
        if (!simpul_1.default.isObject(payload))
            return;
        for (const [key, value] of Object.entries(payload)) {
            const definition = getDefinition(defMap, key);
            if (simpul_1.default.isValid(value)) {
                for (const [name, setting] of Object.entries(definition)) {
                    const validation = validationResolver[name];
                    if (validation === undefined)
                        continue;
                    let matchV, matchD;
                    if (name === "match") {
                        matchV = payload[setting];
                        matchD = getDefinition(defMap, setting);
                    }
                    validation({
                        setting,
                        value,
                        label: definition.label,
                        match: matchV,
                        matchLabel: matchD === null || matchD === void 0 ? void 0 : matchD.label,
                    });
                }
            }
            const isSanitizer = definition.ignoreSanitizer !== true &&
                (simpul_1.default.isString(value) ||
                    simpul_1.default.isArray(value) ||
                    simpul_1.default.isObject(value));
            if (isSanitizer) {
                const options = definition.domPurifyOptions || option.domPurifyOptions;
                const sanitizedValue = (0, sanitized_1.default)(value, options);
                if (definition.ignoreSanitizerValidation !== true) {
                    if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
                        throw new Error(`${definition.label} is a dirty value.`);
                    }
                }
                payload[key] = sanitizedValue;
            }
        }
        for (const requiredKey of required || []) {
            const value = payload[requiredKey];
            const isValue = simpul_1.default.isString(value)
                ? requiredKey.toLowerCase().includes("html") ||
                    requiredKey.toLowerCase().includes("rich_text") ||
                    requiredKey.toLowerCase().includes("richtext")
                    ? stringStripHtml.stripHtml(value).result.trim().length > 0
                    : value.trim().length > 0
                : simpul_1.default.isValid(value);
            if (isValue === false) {
                const definition = getDefinition(defMap, requiredKey);
                throw new Error(`${definition.label} is required.`);
            }
        }
    };
}
function getDefinition(defMap, key) {
    const definition = defMap.get(key);
    if (!definition)
        throw new Error(`Definition with key ("${key}") not found.`);
    return definition;
}
module.exports = initializer;
