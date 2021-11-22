"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPrinterBlink = void 0;
const cross_fetch_1 = require("cross-fetch");
const postPrinterBlink = (baseURL, frequency, count) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer/led/blink", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                frequency,
                count,
            }),
        });
        if (res.status == 204)
            resolve(true);
        reject(res);
    });
};
exports.postPrinterBlink = postPrinterBlink;
