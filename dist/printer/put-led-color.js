"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerLEDColors = exports.putLEDColor = void 0;
const cross_fetch_1 = require("cross-fetch");
const putLEDColor = (baseURL, color) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/printer/led", {
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
        });
        if (res.status == 200)
            resolve(res);
        reject(res);
    });
};
exports.putLEDColor = putLEDColor;
/**
 * An array of pre-defined colors to be used with setLEDColor.
 *
 * ```typescript
 * import { UltimakerClient, UltimakerLEDColors } from "ultimaker-client"
 *
 * const client = new UltimakerClient("000.000.000.000")
 * client.setLEDColor(UltimakerLEDColors.red)
 * ```
 */
exports.UltimakerLEDColors = {
    red: {
        hue: 0,
        saturation: 100,
        brightness: 100,
    },
    blue: {
        hue: 240,
        saturation: 100,
        brightness: 100,
    },
    white: {
        hue: 0,
        saturation: 0,
        brightness: 100,
    },
    green: {
        hue: 120,
        saturation: 100,
        brightness: 100,
    },
    yellow: {
        hue: 60,
        saturation: 100,
        brightness: 100,
    },
    magenta: {
        hue: 300,
        saturation: 100,
        brightness: 100,
    },
    cyan: {
        hue: 180,
        saturation: 100,
        brightness: 100,
    },
};
