"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleJobHistory = exports.getJobHistory = exports.getEventHistory = void 0;
const helpers_1 = require("../helpers");
const getEventHistory = (baseURL, offset = 0, count = 50, typeID) => {
    const url = (baseURL = "/api/v1/history/events");
    let bodyArgs = {
        offset: offset,
        count: count,
    };
    if (typeof typeID != "undefined") {
        bodyArgs = {
            offset: offset,
            count: count,
            type_id: typeID,
        };
    }
    return (0, helpers_1.get)(url, bodyArgs);
};
exports.getEventHistory = getEventHistory;
const getJobHistory = (baseURL, offset = 0, count = 50) => {
    const url = baseURL + "/api/v1/history/print_jobs";
    const bodyArgs = {
        offset,
        count,
    };
    return (0, helpers_1.get)(url, bodyArgs);
};
exports.getJobHistory = getJobHistory;
const getSingleJobHistory = (baseURL, jobUUID) => {
    const url = baseURL + "/api/v1/history/print_jobs/" + jobUUID;
    return (0, helpers_1.get)(url);
};
exports.getSingleJobHistory = getSingleJobHistory;
