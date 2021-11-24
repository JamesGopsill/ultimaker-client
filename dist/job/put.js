"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putJobState = void 0;
const helpers_1 = require("../helpers");
const putJobState = (baseURL, target) => {
    const url = `${baseURL}/api/v1/print_job/state`;
    const bodyArgs = {
        target,
    };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putJobState = putJobState;
