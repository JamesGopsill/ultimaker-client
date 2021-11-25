"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemLog = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemLog = (baseURL, boot = 0, lines = 50) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/log", {
        boot,
        lines,
    });
};
exports.getSystemLog = getSystemLog;
