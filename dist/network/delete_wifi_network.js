"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWifiNetwork = void 0;
const cross_fetch_1 = require("cross-fetch");
const deleteWifiNetwork = (baseURL, ssid) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer/networks/" + ssid, {
            method: "DELETE",
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
exports.deleteWifiNetwork = deleteWifiNetwork;