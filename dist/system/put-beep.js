"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBeep = void 0;
const cross_fetch_1 = require("cross-fetch");
const putBeep = (baseURL, frequency, duration) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/beep", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                frequency: frequency,
                duration: duration,
            }),
        });
        if (res.status == 200)
            resolve(res);
        reject(res);
    });
};
exports.putBeep = putBeep;
