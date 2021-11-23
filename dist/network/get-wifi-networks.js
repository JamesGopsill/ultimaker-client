"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWifiNetworks = void 0;
const helpers_1 = require("../helpers");
const getWifiNetworks = (baseURL) => {
    return (0, helpers_1.get)(baseURL + "/api/v1/printer/network/wifi_networks");
};
exports.getWifiNetworks = getWifiNetworks;
