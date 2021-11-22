"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemPlatform = void 0;
const cross_fetch_1 = require("cross-fetch");
const getSystemPlatform = (baseURL) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/system/platform", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.getSystemPlatform = getSystemPlatform;
