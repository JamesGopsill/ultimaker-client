"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetwork = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getNetwork = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/printer/network");
};
exports.getNetwork = getNetwork;
