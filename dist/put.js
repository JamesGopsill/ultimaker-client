"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEventHistory = void 0;
const cross_fetch_1 = require("cross-fetch");
const response_error_1 = require("./response-error");
const putEventHistory = async function (type_id, parameters) {
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
    return (0, cross_fetch_1.fetch)(`${this.baseUrl}/api/v1/history/events`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formData,
    }).then(async (r) => {
        if (r.ok) {
            const json = await r.json();
            return json;
        }
        throw new response_error_1.ResponseError(r);
    });
};
exports.putEventHistory = putEventHistory;
