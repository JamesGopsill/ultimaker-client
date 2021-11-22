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
__exportStar(require("./printer"), exports);
__exportStar(require("./job"), exports);
__exportStar(require("./system"), exports);
__exportStar(require("./materials"), exports);
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
    getSystemLog(boot = 0, lines = 50) {
        return system.getSystemLog(this.baseURL, boot, lines);
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
    // Printer
    // ###
    getPrinterStatus() {
        return printer.getPrinterStatus(this.baseURL);
    }
    postPrinterBlink(frequency, count) {
        return printer.postPrinterBlink(this.baseURL, frequency, count);
    }
    putPrinterLED(color) {
        return printer.putPrinterLED(this.baseURL, color);
    }
    // ###
    // Job
    // ###
    postJob(jobname, gcode) {
        return job.postJob(this.baseURL, jobname, gcode);
    }
    putJob(target) {
        return job.putJob(this.baseURL, target);
    }
    getJob() {
        return job.getJob(this.baseURL);
    }
    getJobProgress() {
        return job.getJobProgress(this.baseURL);
    }
    getJobTimeTotal() {
        return job.getJobTimeTotal(this.baseURL);
    }
    getJobTimeElapsed() {
        return job.getJobTimeElapsed(this.baseURL);
    }
}
exports.UltimakerClient = UltimakerClient;
