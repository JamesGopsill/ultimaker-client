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
            formData.append("file", gcode, "client.gcode");
        }
        else {
            // Browser
            const blob = new Blob([gcode], { type: "text/plain" });
            formData = new FormData();
            formData.append("jobname", jobname);
            formData.append("file", blob, "client.gcode");
        }
        const url = `${baseURL}/api/v1/print_job`;
        const res = await (0, cross_fetch_1.fetch)(url, {
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
