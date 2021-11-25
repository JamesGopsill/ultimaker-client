"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemCountry = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSystemCountry = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/system/country");
};
exports.getSystemCountry = getSystemCountry;
