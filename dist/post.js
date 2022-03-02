"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postJob = void 0;
const cross_fetch_1 = require("cross-fetch");
const response_error_1 = require("./response-error");
const postJob = async function (jobname, gcode) {
    let formData;
    // Check if we are running in the browser or on node.js
    if (typeof window === "undefined") {
        // Node.js
        const FormData = require("form-data");
        formData = new FormData();
        formData.append("jobname", jobname);
        formData.append("file", gcode, "client.gcode");
    }
    else {
        // Browser
        const blob = new Blob([gcode], { type: "text/plain" });
        formData = new FormData();
        formData.append("jobname", jobname);
        formData.append("file", blob, "client.gcode");
    }
    const url = `${this.baseUrl}/api/v1/print_job`;
    return (0, cross_fetch_1.fetch)(url, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
        },
        body: formData,
    }).then(async (r) => {
        if (r.ok) {
            return r.json();
        }
        throw new response_error_1.ResponseError(r);
    });
};
exports.postJob = postJob;
