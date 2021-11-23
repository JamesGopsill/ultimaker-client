"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetwork = void 0;
const helpers_1 = require("../helpers");
const getNetwork = (baseURL) => {
    return (0, helpers_1.get)(baseURL + "/api/v1/printer/network");
};
exports.getNetwork = getNetwork;
