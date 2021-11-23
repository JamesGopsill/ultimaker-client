"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPrinterLED = void 0;
const helpers_1 = require("../helpers");
const putPrinterLED = (baseURL, color) => {
    const bodyArgs = {
        color: color,
    };
    return (0, helpers_1.put)(baseURL + "/api/v1/printer/", bodyArgs, 204);
};
exports.putPrinterLED = putPrinterLED;
/*
    return new Promise<Boolean>(async (resolve, reject) => {
        const res = await fetch(baseURL + "/api/v1/printer/led", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hue: color.hue,
                saturation: color.saturation,
                brightness: color.brightness,
            }),
        })

        if (res.status == 204) resolve(true)
        reject(res)
    })
    */
