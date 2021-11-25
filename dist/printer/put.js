"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPrinterBedPreHeat = exports.putPrinterBedTemperature = exports.putPrinterHeadJerk = exports.putPrinterHeadMaxSpeed = exports.putPrinterHeadPosition = exports.putPrinterLEDBrightness = exports.putPrinterLEDSaturation = exports.putPrinterLEDHue = exports.putPrinterLED = void 0;
const helpers_1 = require("../helpers");
const putPrinterLED = (baseURL, color) => {
    const url = `${baseURL}/api/v1/printer/led`;
    const bodyArgs = {
        color: color,
    };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterLED = putPrinterLED;
const putPrinterLEDHue = (baseURL, hue) => {
    const url = `${baseURL}/api/v1/printer/led/hue`;
    const bodyArgs = { hue };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterLEDHue = putPrinterLEDHue;
const putPrinterLEDSaturation = (baseURL, saturation) => {
    const url = `${baseURL}/api/v1/printer/led/saturation`;
    const bodyArgs = { saturation };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterLEDSaturation = putPrinterLEDSaturation;
const putPrinterLEDBrightness = (baseURL, brightness) => {
    const url = `${baseURL}/api/v1/printer/led/brightness`;
    const bodyArgs = { brightness };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterLEDBrightness = putPrinterLEDBrightness;
const putPrinterHeadPosition = (baseURL, headID, x, y, z, speed) => {
    const url = `${baseURL}/api/v1/printer/heads/${headID}/position`;
    const bodyArgs = {
        x,
        y,
        z,
        speed,
    };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterHeadPosition = putPrinterHeadPosition;
const putPrinterHeadMaxSpeed = (baseURL, headID, xyz) => {
    const url = `${baseURL}/api/v1/printer/heads/${headID}/max_speed`;
    const bodyArgs = xyz;
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterHeadMaxSpeed = putPrinterHeadMaxSpeed;
const putPrinterHeadJerk = (baseURL, headID, xyz) => {
    const url = `${baseURL}/api/v1/printer/heads/${headID}/jerk`;
    const bodyArgs = xyz;
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterHeadJerk = putPrinterHeadJerk;
const putPrinterBedTemperature = (baseURL, temperature) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("temperature", temperature);
        }
        else {
            // Browser
            formData = new FormData();
            formData.append("temperature", temperature);
        }
        const res = await fetch(baseURL + "/api/v1/printer/bed/temperature", {
            method: "POST",
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
exports.putPrinterBedTemperature = putPrinterBedTemperature;
const putPrinterBedPreHeat = (baseURL, temperature, timeout) => {
    const url = `${baseURL}/api/v1/printer/bed/pre_heat`;
    const bodyArgs = {
        temperature,
        timeout,
    };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putPrinterBedPreHeat = putPrinterBedPreHeat;
