"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemLanguage = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemLanguage = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/language");
};
exports.getSystemLanguage = getSystemLanguage;
