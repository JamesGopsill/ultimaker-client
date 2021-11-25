"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrinterBedType = exports.getPrinterBedPreHeat = exports.getPrinterBedTemperature = exports.getPrinterBed = exports.getPrinterHeadExtruderHotendTemperature = exports.getPrinterHeadExtruderHotend = exports.getPrinterHeadExtruderActiveMaterialGUID = exports.getPrinterHeadExtruderActiveMaterialLengthRemaining = exports.getPrinterHeadExtruderActiveMaterial = exports.getPrinterHeadExtruderFeederAcceleration = exports.getPrinterHeadExtruderFeederMaxSpeed = exports.getPrinterHeadExtruderFeederJerk = exports.getPrinterHeadExtruderFeeder = exports.getPrinterHeadExtruderHotendOffset = exports.getPrinterHeadExtruder = exports.getPrinterHeadExtruders = exports.getPrinterHeadJerk = exports.getPrinterHeadAcceleration = exports.getPrinterHeadMaxSpeed = exports.getPrinterHeadPosition = exports.getPrinterHead = exports.getPrinterHeads = exports.getPrinterLEDBrightness = exports.getPrinterLEDSaturation = exports.getPrinterLEDHue = exports.getPrinterLED = exports.getPrinterStatus = exports.getPrinter = void 0;
const helpers_1 = require("../helpers");
const getPrinter = (baseURL) => {
    const url = `${baseURL}/api/v1/printer`;
    return (0, helpers_1.get)(url);
};
exports.getPrinter = getPrinter;
const getPrinterStatus = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/status`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterStatus = getPrinterStatus;
const getPrinterLED = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/led`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterLED = getPrinterLED;
const getPrinterLEDHue = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/led/hue`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterLEDHue = getPrinterLEDHue;
const getPrinterLEDSaturation = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/led/saturation`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterLEDSaturation = getPrinterLEDSaturation;
const getPrinterLEDBrightness = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/led/brightness`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterLEDBrightness = getPrinterLEDBrightness;
const getPrinterHeads = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/heads`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeads = getPrinterHeads;
const getPrinterHead = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHead = getPrinterHead;
const getPrinterHeadPosition = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/position`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadPosition = getPrinterHeadPosition;
const getPrinterHeadMaxSpeed = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/max_speed`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadMaxSpeed = getPrinterHeadMaxSpeed;
const getPrinterHeadAcceleration = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/max_speed`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadAcceleration = getPrinterHeadAcceleration;
const getPrinterHeadJerk = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/jerk`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadJerk = getPrinterHeadJerk;
const getPrinterHeadExtruders = (baseURL, headIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruders = getPrinterHeadExtruders;
const getPrinterHeadExtruder = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruder = getPrinterHeadExtruder;
const getPrinterHeadExtruderHotendOffset = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend/offset`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderHotendOffset = getPrinterHeadExtruderHotendOffset;
const getPrinterHeadExtruderFeeder = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderFeeder = getPrinterHeadExtruderFeeder;
const getPrinterHeadExtruderFeederJerk = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/jerk`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderFeederJerk = getPrinterHeadExtruderFeederJerk;
const getPrinterHeadExtruderFeederMaxSpeed = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/max_speed`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderFeederMaxSpeed = getPrinterHeadExtruderFeederMaxSpeed;
const getPrinterHeadExtruderFeederAcceleration = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/acceleration`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderFeederAcceleration = getPrinterHeadExtruderFeederAcceleration;
const getPrinterHeadExtruderActiveMaterial = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderActiveMaterial = getPrinterHeadExtruderActiveMaterial;
const getPrinterHeadExtruderActiveMaterialLengthRemaining = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material/length_remaining`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderActiveMaterialLengthRemaining = getPrinterHeadExtruderActiveMaterialLengthRemaining;
const getPrinterHeadExtruderActiveMaterialGUID = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material_guid`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderActiveMaterialGUID = getPrinterHeadExtruderActiveMaterialGUID;
const getPrinterHeadExtruderHotend = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderHotend = getPrinterHeadExtruderHotend;
const getPrinterHeadExtruderHotendTemperature = (baseURL, headIndex, extruderIndex) => {
    const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend/temperature`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterHeadExtruderHotendTemperature = getPrinterHeadExtruderHotendTemperature;
const getPrinterBed = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/bed`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterBed = getPrinterBed;
const getPrinterBedTemperature = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/bed/temperature`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterBedTemperature = getPrinterBedTemperature;
const getPrinterBedPreHeat = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/bed/pre_heat`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterBedPreHeat = getPrinterBedPreHeat;
const getPrinterBedType = (baseURL) => {
    const url = `${baseURL}/api/v1/printer/bed/type`;
    return (0, helpers_1.get)(url);
};
exports.getPrinterBedType = getPrinterBedType;
