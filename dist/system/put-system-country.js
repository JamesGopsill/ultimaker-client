"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSystemCountry = void 0;
const cross_fetch_1 = require("cross-fetch");
const putSystemCountry = (baseURL, country) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/system/country", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
        });
        if (res.status == 204)
            resolve(true);
        reject(res);
    });
};
exports.putSystemCountry = putSystemCountry;
