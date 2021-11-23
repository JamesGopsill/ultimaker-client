"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventHistory = void 0;
const cross_fetch_1 = require("cross-fetch");
const getEventHistory = (baseURL, offset = 0, count = 50, typeID) => {
    return new Promise(async (resolve, reject) => {
        let bodyArgs = {
            offset: offset,
            count: count,
        };
        if (typeof typeID != "undefined") {
            bodyArgs = {
                offset: offset,
                count: count,
                type_id: typeID,
            };
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/history/events", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyArgs),
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.getEventHistory = getEventHistory;
