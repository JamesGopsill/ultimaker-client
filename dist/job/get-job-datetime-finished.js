"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobDateTimeFinished = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getJobDateTimeFinished = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/print_job/datetime_cleaned");
};
exports.getJobDateTimeFinished = getJobDateTimeFinished;