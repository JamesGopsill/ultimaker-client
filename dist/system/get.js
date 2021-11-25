"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystem = exports.getSystemVariant = exports.getSystemUpTime = exports.getSystemType = exports.getSystemTime = exports.getSystemPlatform = exports.getSystemName = exports.getSystemMemory = exports.getSystemLog = exports.getSystemLanguage = exports.getSystemHostname = exports.getSystemHardware = exports.getSystemHardwareTypeId = exports.getSystemHardwareRevision = exports.getSystemGUID = exports.getSystemFirmware = exports.getSystemFirmwareTesting = exports.getSystemFirmwareStatus = exports.getSystemFirmwareStable = exports.getSystemCountry = void 0;
const helpers_1 = require("../helpers");
const getSystemCountry = (baseURL) => {
    const url = `${baseURL}/api/v1/system/country`;
    return (0, helpers_1.get)(url);
};
exports.getSystemCountry = getSystemCountry;
const getSystemFirmwareStable = (baseURL) => {
    const url = `${baseURL}/api/v1/system/firmware/stable`;
    return (0, helpers_1.get)(url);
};
exports.getSystemFirmwareStable = getSystemFirmwareStable;
const getSystemFirmwareStatus = (baseURL) => {
    const url = `${baseURL}/api/v1/system/firmware/status`;
    return (0, helpers_1.get)(url);
};
exports.getSystemFirmwareStatus = getSystemFirmwareStatus;
const getSystemFirmwareTesting = (baseURL) => {
    const url = `${baseURL}/api/v1/system/firmware/testing`;
    return (0, helpers_1.get)(url);
};
exports.getSystemFirmwareTesting = getSystemFirmwareTesting;
const getSystemFirmware = (baseURL) => {
    const url = `${baseURL}/api/v1/system/firmware`;
    return (0, helpers_1.get)(url);
};
exports.getSystemFirmware = getSystemFirmware;
const getSystemGUID = (baseURL) => {
    const url = `${baseURL}/api/v1/system/guid`;
    return (0, helpers_1.get)(url);
};
exports.getSystemGUID = getSystemGUID;
const getSystemHardwareRevision = (baseURL) => {
    const url = `${baseURL}/api/v1/system/hardware/revision`;
    return (0, helpers_1.get)(url);
};
exports.getSystemHardwareRevision = getSystemHardwareRevision;
const getSystemHardwareTypeId = (baseURL) => {
    const url = `${baseURL}/api/v1/system/hardware/typeid`;
    return (0, helpers_1.get)(url);
};
exports.getSystemHardwareTypeId = getSystemHardwareTypeId;
const getSystemHardware = (baseURL) => {
    const url = `${baseURL}/api/v1/system/hardware`;
    return (0, helpers_1.get)(url);
};
exports.getSystemHardware = getSystemHardware;
const getSystemHostname = (baseURL) => {
    const url = `${baseURL}/api/v1/system/hostname`;
    return (0, helpers_1.get)(url);
};
exports.getSystemHostname = getSystemHostname;
const getSystemLanguage = (baseURL) => {
    const url = `${baseURL}/api/v1/system/language`;
    return (0, helpers_1.get)(url);
};
exports.getSystemLanguage = getSystemLanguage;
const getSystemLog = (baseURL) => {
    const url = `${baseURL}/api/v1/system/log`;
    return (0, helpers_1.get)(url);
};
exports.getSystemLog = getSystemLog;
const getSystemMemory = (baseURL) => {
    const url = `${baseURL}/api/v1/system/memory`;
    return (0, helpers_1.get)(url);
};
exports.getSystemMemory = getSystemMemory;
const getSystemName = (baseURL) => {
    const url = `${baseURL}/api/v1/system/name`;
    return (0, helpers_1.get)(url);
};
exports.getSystemName = getSystemName;
const getSystemPlatform = (baseURL) => {
    const url = `${baseURL}/api/v1/system/platform`;
    return (0, helpers_1.get)(url);
};
exports.getSystemPlatform = getSystemPlatform;
const getSystemTime = (baseURL) => {
    const url = `${baseURL}/api/v1/system/time`;
    return (0, helpers_1.get)(url);
};
exports.getSystemTime = getSystemTime;
const getSystemType = (baseURL) => {
    const url = `${baseURL}/api/v1/system/type`;
    return (0, helpers_1.get)(url);
};
exports.getSystemType = getSystemType;
const getSystemUpTime = (baseURL) => {
    const url = `${baseURL}/api/v1/system/uptime`;
    return (0, helpers_1.get)(url);
};
exports.getSystemUpTime = getSystemUpTime;
const getSystemVariant = (baseURL) => {
    const url = `${baseURL}/api/v1/system/variant`;
    return (0, helpers_1.get)(url);
};
exports.getSystemVariant = getSystemVariant;
const getSystem = (baseURL) => {
    const url = `${baseURL}/api/v1/system`;
    return (0, helpers_1.get)(url);
};
exports.getSystem = getSystem;
