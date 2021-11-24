"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSystemName = exports.putSystemFirmware = exports.putSystemDisplayMessage = exports.putSystemCountry = void 0;
const helpers_1 = require("../helpers");
const putSystemCountry = (baseURL, country) => {
    const url = `${baseURL}/api/v1/system/country`;
    const bodyArgs = { country: country };
    return (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putSystemCountry = putSystemCountry;
const putSystemDisplayMessage = (baseURL, message, buttonCaption) => {
    const url = `${baseURL}/api/v1/system/display_message`;
    const bodyArgs = {
        message: message,
        button_caption: buttonCaption,
    };
    (0, helpers_1.put)(url, 200, bodyArgs);
};
exports.putSystemDisplayMessage = putSystemDisplayMessage;
const putSystemFirmware = (baseURL, updateType) => {
    const url = `${baseURL}/api/v1/system/firmware`;
    const bodyArgs = { update_type: updateType };
    (0, helpers_1.put)(url, 200, bodyArgs);
};
exports.putSystemFirmware = putSystemFirmware;
const putSystemName = (baseURL, name) => {
    const url = `${baseURL}/api/v1/system/name`;
    const bodyArgs = { name: name };
    (0, helpers_1.put)(url, 204, bodyArgs);
};
exports.putSystemName = putSystemName;
