"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPrinterValidateHeader = exports.postPrinterHeadPosition = exports.postPrinterBeep = exports.postPrinterBlink = void 0;
const cross_fetch_1 = require("cross-fetch");
const helpers_1 = require("../helpers");
const postPrinterBlink = (baseURL, frequency, count) => {
    const url = `${baseURL}/api/v1/printer/led/blink`;
    const bodyArgs = {
        frequency,
        count,
    };
    return (0, helpers_1.post)(url, 204, bodyArgs);
};
exports.postPrinterBlink = postPrinterBlink;
const postPrinterBeep = (baseURL, frequency, duration) => {
    const url = `${baseURL}/api/v1/printer/beep`;
    const bodyArgs = {
        frequency,
        duration,
    };
    return (0, helpers_1.post)(url, 204, bodyArgs);
};
exports.postPrinterBeep = postPrinterBeep;
const postPrinterHeadPosition = (baseURL, headID, position) => {
    const url = `${baseURL}/api/v1/printer/heads/${headID}/position`;
    return (0, helpers_1.post)(url, 200, {
        action: position,
    });
};
exports.postPrinterHeadPosition = postPrinterHeadPosition;
const postPrinterValidateHeader = (baseURL, gcode) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        // let blob: any
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            //const buffer = require("buffer")
            //blob = new buffer.Blob([gcode], { type: "text/plain" })
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("file", gcode);
        }
        else {
            // Browser
            //blob = new Blob([gcode], { type: "text/plain" })
            formData = new FormData();
            formData.append("file", gcode);
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer/validate_header", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.postPrinterValidateHeader = postPrinterValidateHeader;
