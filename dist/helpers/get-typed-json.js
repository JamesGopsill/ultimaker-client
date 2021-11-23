"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypedJSON = void 0;
const cross_fetch_1 = require("cross-fetch");
const getTypedJSON = (url, queryArgs) => {
    return new Promise(async (resolve, reject) => {
        let res;
        if (typeof queryArgs != "undefined") {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(queryArgs),
            });
        }
        else {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
        }
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.getTypedJSON = getTypedJSON;
