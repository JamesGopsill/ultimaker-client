"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobTimeTotal = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getJobTimeTotal = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/print_job/time_total");
};
exports.getJobTimeTotal = getJobTimeTotal;
