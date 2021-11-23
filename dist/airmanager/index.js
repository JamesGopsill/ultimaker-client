"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirManager = void 0;
const helpers_1 = require("../helpers");
const getAirManager = (baseURL) => {
    const url = baseURL + "/api/v1/airmanager";
    return (0, helpers_1.get)(url);
};
exports.getAirManager = getAirManager;
