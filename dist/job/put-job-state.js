"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerJobTargetState = exports.putJobState = void 0;
const cross_fetch_1 = require("cross-fetch");
const putJobState = (baseURL, target) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/print_job/state", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                target: target,
            }),
        });
        if (res.status == 204)
            resolve(true);
        reject(res);
    });
};
exports.putJobState = putJobState;
var UltimakerJobTargetState;
(function (UltimakerJobTargetState) {
    UltimakerJobTargetState["ABORT"] = "abort";
    UltimakerJobTargetState["PAUSE"] = "pause";
    UltimakerJobTargetState["PRINT"] = "print";
})(UltimakerJobTargetState = exports.UltimakerJobTargetState || (exports.UltimakerJobTargetState = {}));
