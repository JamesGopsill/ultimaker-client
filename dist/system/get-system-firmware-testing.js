"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemFirmwareTesting = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemFirmwareTesting = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/firmware/testing");
};
exports.getSystemFirmwareTesting = getSystemFirmwareTesting;
