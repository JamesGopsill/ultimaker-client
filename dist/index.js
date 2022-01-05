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
exports.UltimakerClient = exports.ResponseError = void 0;
const cross_fetch_1 = require("cross-fetch");
const is_ip_1 = __importDefault(require("is-ip"));
__exportStar(require("./interfaces"), exports);
class ResponseError extends Error {
    constructor(response) {
        super("Check error.response for the response from the server.");
        this.name = "ResponseError";
        this.message = "Check error.response for the response from the server.";
        this.response = response;
    }
}
exports.ResponseError = ResponseError;
class UltimakerClient {
    constructor(ip, debug = false) {
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[UltimakerClient] Invalid IP address");
        }
        this.baseUrl = `http://${ip}/api/v1/`;
        this.debug = debug;
    }
    async get(object, id, bodyArgs) {
        // TODO: type check
        let url = object.toString();
        // Should be a string if not undefined
        if (typeof id != "undefined") {
            url = url.replace("{id}", id);
        }
        return (0, cross_fetch_1.fetch)(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyArgs),
        }).then(async (r) => {
            if (r.ok) {
                const json = await r.json();
                // TODO: Add in the function to check for and return dates
                return json;
            }
            throw new ResponseError(r);
        });
    }
}
exports.UltimakerClient = UltimakerClient;
