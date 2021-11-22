"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrinterStatus = void 0;
const cross_fetch_1 = require("cross-fetch");
const getPrinterStatus = (baseURL) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
        });
        if (res.status == 200) {
            const data = await res.json();
            resolve(data.status);
        }
        reject(res);
    });
};
exports.getPrinterStatus = getPrinterStatus;
