"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerClient = void 0;
const is_ip_1 = __importDefault(require("is-ip"));
const job_1 = require("./job");
const printer_1 = require("./printer");
const system_1 = require("./system");
__exportStar(require("./printer"), exports);
__exportStar(require("./job"), exports);
__exportStar(require("./system"), exports);
/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
class UltimakerClient {
    /** Checks if the IP address is a valid format before creating an instance of the client.  */
    constructor(ip) {
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[UltimakerClient] Invalid IP address");
        }
        // TODO: Check if we can get a response from the Ultimaker.
        this.ip = ip;
        this.baseURL = "http://" + this.ip;
    }
    // Methods
    getSystemName() {
        return (0, system_1.getSystemName)(this.baseURL);
    }
    getPrinterStatus() {
        return (0, printer_1.getPrinterStatus)(this.baseURL);
    }
    postPrinterBlink(frequency, count) {
        return (0, printer_1.postPrinterBlink)(this.baseURL, frequency, count);
    }
    postJob(jobname, gcode) {
        return (0, job_1.postJob)(this.baseURL, jobname, gcode);
    }
    putPrinterLED(color) {
        return (0, printer_1.putPrinterLED)(this.baseURL, color);
    }
    putJob(target) {
        return (0, job_1.putJob)(this.baseURL, target);
    }
    getJob() {
        return (0, job_1.getJob)(this.baseURL);
    }
    getSystemGUID() {
        return (0, system_1.getSystemGUID)(this.baseURL);
    }
    getJobProgress() {
        return (0, job_1.getJobProgress)(this.baseURL);
    }
    getJobTimeTotal() {
        return (0, job_1.getJobTimeTotal)(this.baseURL);
    }
    getJobTimeElapsed() {
        return (0, job_1.getJobTimeElapsed)(this.baseURL);
    }
}
exports.UltimakerClient = UltimakerClient;
