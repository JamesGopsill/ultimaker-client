"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemPlatform = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemPlatform = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/platform");
};
exports.getSystemPlatform = getSystemPlatform;
