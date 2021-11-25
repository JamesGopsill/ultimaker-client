"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerSystemUpdateType = exports.putSystemFirmware = void 0;
const cross_fetch_1 = require("cross-fetch");
const putSystemFirmware = (baseURL, updateType) => {
    return new Promise(async (resolve, reject) => {
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/system", {
            method: "PUT",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify({
                update_type: updateType,
            }),
        });
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.putSystemFirmware = putSystemFirmware;
var UltimakerSystemUpdateType;
(function (UltimakerSystemUpdateType) {
    UltimakerSystemUpdateType["TESTING"] = "testing";
    UltimakerSystemUpdateType["STABLE"] = "stable";
})(UltimakerSystemUpdateType = exports.UltimakerSystemUpdateType || (exports.UltimakerSystemUpdateType = {}));
