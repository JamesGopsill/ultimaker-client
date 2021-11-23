"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putWifiNetwork = void 0;
const cross_fetch_1 = require("cross-fetch");
const putWifiNetwork = (baseURL, ssid, passphrase) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("passphrase", passphrase);
        }
        else {
            // Browser
            formData = new FormData();
            formData.append("passphrase", passphrase);
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer/networks/" + ssid, {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (res.status == 204)
            resolve(true);
        reject(res);
    });
};
exports.putWifiNetwork = putWifiNetwork;
