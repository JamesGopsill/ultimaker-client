"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEventHistory = void 0;
const cross_fetch_1 = require("cross-fetch");
const putEventHistory = (baseURL, type_id, parameters) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("type_id", type_id);
            formData.append("parameters", parameters);
        }
        else {
            // Browser
            formData = new FormData();
            formData.append("type_id", type_id);
            formData.append("parameters", parameters);
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/history/events", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: formData,
        });
        if (res.status == 200)
            resolve(true);
        reject(res);
    });
};
exports.putEventHistory = putEventHistory;
