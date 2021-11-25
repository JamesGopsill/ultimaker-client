"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleJobHistory = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getSingleJobHistory = (baseURL, jobUUID) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/history/print_jobs/" + jobUUID);
};
exports.getSingleJobHistory = getSingleJobHistory;
