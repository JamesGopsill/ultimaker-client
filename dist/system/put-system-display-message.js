"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSystemDisplayMessage = void 0;
const cross_fetch_1 = require("cross-fetch");
const putSystemDisplayMessage = (baseURL, message, buttonCaption) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/system/display_message", {
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
        });
        if (res.status == 200)
            resolve(true);
        reject(res);
    });
};
exports.putSystemDisplayMessage = putSystemDisplayMessage;
