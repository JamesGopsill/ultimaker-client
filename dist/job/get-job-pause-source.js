"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobPauseSource = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getJobPauseSource = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/print_job/pause_source");
};
exports.getJobPauseSource = getJobPauseSource;
