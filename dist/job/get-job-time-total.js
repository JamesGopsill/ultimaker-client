"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobTimeTotal = void 0;
const cross_fetch_1 = require("cross-fetch");
const getJobTimeTotal = (baseURL) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/print_job/time_total", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.getJobTimeTotal = getJobTimeTotal;
