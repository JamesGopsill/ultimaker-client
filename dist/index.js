"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerClient = void 0;
const is_ip_1 = __importDefault(require("is-ip"));
const job = __importStar(require("./job"));
const printer = __importStar(require("./printer"));
const system = __importStar(require("./system"));
const materials = __importStar(require("./materials"));
const networks = __importStar(require("./network"));
const history = __importStar(require("./history"));
const airmanager = __importStar(require("./airmanager"));
// Export the individual endpoints in case someone wants to use them directly
__exportStar(require("./printer/interfaces"), exports);
__exportStar(require("./job/interfaces"), exports);
__exportStar(require("./system/interfaces"), exports);
__exportStar(require("./history/interfaces"), exports);
__exportStar(require("./airmanager/interfaces"), exports);
/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
class UltimakerClient {
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(ip) {
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[UltimakerClient] Invalid IP address");
        }
        // TODO: Check if we can get a response from the Ultimaker.
        this.ip = ip;
        this.baseURL = "http://" + this.ip;
    }
    // Methods
    // ###
    // System endpoint
    // ###
    getSystem() {
        return system.getSystem(this.baseURL);
    }
    getSystemName() {
        return system.getSystemName(this.baseURL);
    }
    putSystemName(name) {
        return system.putSystemName(this.baseURL, name);
    }
    getSystemGUID() {
        return system.getSystemGUID(this.baseURL);
    }
    getSystemHostname() {
        return system.getSystemHostname(this.baseURL);
    }
    getSystemPlatform() {
        return system.getSystemPlatform(this.baseURL);
    }
    getSystemFirmware() {
        return system.getSystemFirmware(this.baseURL);
    }
    putSystemFirmware(updateType) {
        return system.putSystemFirmware(this.baseURL, updateType);
    }
    getSystemFirmwareStatus() {
        return system.getSystemFirmwareStatus(this.baseURL);
    }
    getSystemFirmwareStable() {
        return system.getSystemFirmwareStable(this.baseURL);
    }
    getSystemFirmwareTesting() {
        return system.getSystemFirmwareTesting(this.baseURL);
    }
    getSystemMemory() {
        return system.getSystemMemory(this.baseURL);
    }
    getSystemTime() {
        return system.getSystemTime(this.baseURL);
    }
    getSystemLog() {
        return system.getSystemLog(this.baseURL);
    }
    getSystemCountry() {
        return system.getSystemCountry(this.baseURL);
    }
    putSystemCountry(country) {
        return system.putSystemCountry(this.baseURL, country);
    }
    getSystemLanguage() {
        return system.getSystemLanguage(this.baseURL);
    }
    getSystemUpTime() {
        return system.getSystemUpTime(this.baseURL);
    }
    getSystemType() {
        return system.getSystemType(this.baseURL);
    }
    getSystemVariant() {
        return system.getSystemVariant(this.baseURL);
    }
    getSystemHardware() {
        return system.getSystemHardware(this.baseURL);
    }
    getSystemHardwareTypeId() {
        return system.getSystemHardwareTypeId(this.baseURL);
    }
    getSystemHardwareRevision() {
        return system.getSystemHardwareRevision(this.baseURL);
    }
    putSystemDisplayMessage(message, buttonCaption) {
        return system.putSystemDisplayMessage(this.baseURL, message, buttonCaption);
    }
    // ###
    // Materials
    // ###
    getMaterials() {
        return materials.getMaterials(this.baseURL);
    }
    getMaterial(materialGUID) {
        return materials.getMaterial(this.baseURL, materialGUID);
    }
    deleteMaterial(materialGUID) {
        return materials.deleteMaterial(this.baseURL, materialGUID);
    }
    putMaterial(materialGUID) {
        return materials.putMaterial(this.baseURL, materialGUID);
    }
    // ###
    // Networks
    // ###
    getNetwork() {
        return networks.getNetwork(this.baseURL);
    }
    getWifiNetworks() {
        return networks.getWifiNetworks(this.baseURL);
    }
    deleteWifiNetwork(ssid) {
        return networks.deleteWifiNetwork(this.baseURL, ssid);
    }
    putWifiNetwork(ssid, passphrase) {
        return networks.putWifiNetwork(this.baseURL, ssid, passphrase);
    }
    // ###
    // History
    // ###
    getJobHistory() {
        return history.getJobHistory(this.baseURL);
    }
    getSingleJobHistory(uuid) {
        return history.getSingleJobHistory(this.baseURL, uuid);
    }
    getEventHistory() {
        return history.getEventHistory(this.baseURL);
    }
    putEventHistory(typeID, parameters) {
        return history.putEventHistory(this.baseURL, typeID, parameters);
    }
    // ###
    // Printer
    // ###
    getPrinter() {
        return printer.getPrinter(this.baseURL);
    }
    getPrinterStatus() {
        return printer.getPrinterStatus(this.baseURL);
    }
    getPrinterLED() {
        return printer.getPrinterLED(this.baseURL);
    }
    getPrinterLEDHue() {
        return printer.getPrinterLEDHue(this.baseURL);
    }
    getPrinterLEDSaturation() {
        return printer.getPrinterLEDSaturation(this.baseURL);
    }
    getPrinterLEDBrightness() {
        return printer.getPrinterLEDBrightness(this.baseURL);
    }
    getPrinterHeads() {
        return printer.getPrinterHeads(this.baseURL);
    }
    getPrinterHead(headIndex) {
        return printer.getPrinterHead(this.baseURL, headIndex);
    }
    getPrinterPosition(headIndex) {
        return printer.getPrinterHeadPosition(this.baseURL, headIndex);
    }
    getPrinterHeadMaxSpeed(headIndex) {
        return printer.getPrinterHeadMaxSpeed(this.baseURL, headIndex);
    }
    getPrinterHeadAcceleration(headIndex) {
        return printer.getPrinterHeadAcceleration(this.baseURL, headIndex);
    }
    getPrinterHeadJerk(headIndex) {
        return printer.getPrinterHeadJerk(this.baseURL, headIndex);
    }
    getPrinterHeadExtruders(headIndex) {
        return printer.getPrinterHeadExtruders(this.baseURL, headIndex);
    }
    getPrinterHeadExtruder(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruder(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderHotendOffset(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderHotendOffset(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderFeeder(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderFeeder(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderFeederJerk(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderFeederJerk(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderFeederMaxSpeed(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderFeederMaxSpeed(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderFeederAcceleration(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderFeederAcceleration(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderActiveMaterial(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderActiveMaterial(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderActiveMaterialLengthRemaining(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderActiveMaterialLengthRemaining(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderActiveMaterialGUID(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderActiveMaterialGUID(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderHotend(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderHotend(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterHeadExtruderHotendTemperature(headIndex, extruderIndex) {
        return printer.getPrinterHeadExtruderHotendTemperature(this.baseURL, headIndex, extruderIndex);
    }
    getPrinterBed() {
        return printer.getPrinterBed(this.baseURL);
    }
    getPrinterBedTemperature() {
        return printer.getPrinterBedTemperature(this.baseURL);
    }
    getPrinterBedPreHeat() {
        return printer.getPrinterBedPreHeat(this.baseURL);
    }
    getPrinterBedType() {
        return printer.getPrinterBedType(this.baseURL);
    }
    postPrinterBlink(frequency, count) {
        return printer.postPrinterBlink(this.baseURL, frequency, count);
    }
    /*
    public postPrinterValidateHeader(gcode: string) {
        return printer.postPrinterValidateHeader(this.baseURL, gcode)
    }
    */
    putPrinterLED(color) {
        return printer.putPrinterLED(this.baseURL, color);
    }
    putPrinterLEDHue(hue) {
        return printer.putPrinterLEDHue(this.baseURL, hue);
    }
    putPrinterLEDSaturation(saturation) {
        return printer.putPrinterLEDSaturation(this.baseURL, saturation);
    }
    putPrinterLEDBrightness(brightness) {
        return printer.putPrinterLEDBrightness(this.baseURL, brightness);
    }
    putPrinterHeadPosition(headIndex, x, y, z, speed) {
        return printer.putPrinterHeadPosition(this.baseURL, headIndex, x, y, z, speed);
    }
    putPrinterHeadMaxSpeed(headIndex, xyz) {
        return printer.putPrinterHeadMaxSpeed(this.baseURL, headIndex, xyz);
    }
    putPrinterHeadJerk(headIndex, xyz) {
        return printer.putPrinterHeadJerk(this.baseURL, headIndex, xyz);
    }
    putPrinterBedTemperature(temperature) {
        return printer.putPrinterBedTemperature(this.baseURL, temperature);
    }
    putPrinterBedPreHeat(temperature, duration) {
        return printer.putPrinterBedPreHeat(this.baseURL, temperature, duration);
    }
    // ###
    // Job
    // ###
    postJob(jobname, gcode) {
        return job.postJob(this.baseURL, jobname, gcode);
    }
    putJob(target) {
        return job.putJobState(this.baseURL, target);
    }
    getJobDateTimeCleaned() {
        return job.getJobDateTimeCleaned(this.baseURL);
    }
    getJobDateTimeFinished() {
        return job.getJobDateTimeFinished(this.baseURL);
    }
    getJobDateTimeStarted() {
        return job.getJobDateTimeStarted(this.baseURL);
    }
    getJobName() {
        return job.getJobName(this.baseURL);
    }
    getJobPauseSource() {
        return job.getJobPauseSource(this.baseURL);
    }
    getJobProgress() {
        return job.getJobProgress(this.baseURL);
    }
    getJobReprintOriginalUUID() {
        return job.getJobReprintOriginalUUID(this.baseURL);
    }
    getJobResult() {
        return job.getJobResult(this.baseURL);
    }
    getJobSourceApplication() {
        return job.getJobSourceApplication(this.baseURL);
    }
    getJobSourceUser() {
        return job.getJobSourceUser(this.baseURL);
    }
    getJobSource() {
        return job.getJobSource(this.baseURL);
    }
    getJobState() {
        return job.getJobState(this.baseURL);
    }
    getJobTimeElapsed() {
        return job.getJobTimeElapsed(this.baseURL);
    }
    getJobTimeTotal() {
        return job.getJobTimeTotal(this.baseURL);
    }
    getJobUUID() {
        return job.getJobUUID(this.baseURL);
    }
    getJob() {
        return job.getJob(this.baseURL);
    }
    // ###
    // AirManager
    // ###
    getAirManager() {
        return airmanager.getAirManager(this.baseURL);
    }
}
exports.UltimakerClient = UltimakerClient;
