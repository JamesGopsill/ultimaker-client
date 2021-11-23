"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSystemName = exports.putSystemFirmware = exports.putSystemDisplayMessage = exports.putSystemCountry = void 0;
const helpers_1 = require("../helpers");
const putSystemCountry = (baseURL, country) => {
    const bodyArgs = { country: country };
    return (0, helpers_1.put)(baseURL, bodyArgs, 204);
};
exports.putSystemCountry = putSystemCountry;
const putSystemDisplayMessage = (baseURL, message, buttonCaption) => {
    const bodyArgs = {
        message: message,
        button_caption: buttonCaption,
    };
    (0, helpers_1.put)(baseURL, bodyArgs, 200);
};
exports.putSystemDisplayMessage = putSystemDisplayMessage;
const putSystemFirmware = (baseURL, updateType) => {
    const bodyArgs = { update_type: updateType };
    (0, helpers_1.put)(baseURL, bodyArgs, 200);
};
exports.putSystemFirmware = putSystemFirmware;
const putSystemName = (baseURL, name) => {
    const bodyArgs = { name: name };
    (0, helpers_1.put)(baseURL, bodyArgs, 204);
};
exports.putSystemName = putSystemName;
/*
    return new Promise<Boolean>(async (resolve, reject) => {
        const res = await fetch(baseURL + "/api/v1/system/country", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                country: country
            })
        })

        if (res.status == 204) resolve(true)
        reject(res)
    })
    */
/*
    return new Promise<Boolean>(async (resolve, reject) => {
        const res = await fetch(baseURL + "/api/v1/system/display_message", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                message_data: {
                    message: message,
                    button_caption: buttonCaption,
                },
            }),
        })

        if (res.status == 200) resolve(true)
        reject(res)
    })
    */
/*
    return new Promise<string>(async (resolve, reject) => {
        const res = await fetch(baseURL + "/api/v1/system", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                update_type: updateType,
            }),
        })

        if (res.status == 200) resolve(res.json())
        reject(res)
    })
    */
/*
    return new Promise<Boolean>(async (resolve, reject) => {
        const res = await fetch(baseURL + "/api/v1/system/name", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        })

        if (res.status == 204) resolve(true)
        reject(res)
    })
    */
