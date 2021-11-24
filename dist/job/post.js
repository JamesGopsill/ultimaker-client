"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postJob = void 0;
const cross_fetch_1 = require("cross-fetch");
const postJob = (baseURL, jobname, gcode) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        //let blob: any
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            //const buffer = require("buffer")
            //blob = new buffer.Blob([gcode], { type: "text/plain" })
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("jobname", jobname);
            formData.append("file", gcode, "test.gcode");
        }
        else {
            // Browser
            // blob = new Blob([gcode], { type: "text/plain" })
            formData = new FormData();
            formData.append("jobname", jobname);
            formData.append("file", gcode, "test.gcode");
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/print_job", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (res.status == 201)
            resolve(res.json());
        reject(res);
    });
};
exports.postJob = postJob;
