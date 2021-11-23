"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWifiNetworks = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getWifiNetworks = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/printer/network/wifi_networks");
};
exports.getWifiNetworks = getWifiNetworks;
