"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobHistory = void 0;
const cross_fetch_1 = require("cross-fetch");
const getJobHistory = (baseURL, offset = 0, count = 50) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/history/print_jobs", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                offset,
                count,
            }),
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.getJobHistory = getJobHistory;
