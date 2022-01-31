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
const cross_fetch_1 = require("cross-fetch");
const is_ip_1 = __importDefault(require("is-ip"));
const methods_1 = require("./methods");
const put = __importStar(require("./put"));
const response_error_1 = require("./response-error");
__exportStar(require("./interfaces"), exports);
class UltimakerClient {
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(ip) {
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[UltimakerClient] Invalid IP address");
        }
        this.ip = ip;
        this.baseUrl = "http://" + this.ip;
        // Create the get methods
        for (const method of methods_1.getMethods) {
            //@ts-ignore
            this[method.name] = () => {
                return this.get(`${this.baseUrl}/${method.endpoint}`);
            };
        }
        for (const method of methods_1.getObjectMethods) {
            //@ts-ignore
            this[method.name] = (id) => {
                const url = `${this.baseUrl}/${method.endpoint}/${id}`;
                return this.get(url);
            };
        }
        // Run through all the put requests and add them to the Ultimaker Client
        for (const key of Object.keys(put)) {
            //@ts-ignore
            this[key] = put[key];
        }
    }
    async get(url, bodyArgs) {
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
                return json;
            }
            throw new response_error_1.ResponseError(r);
        });
    }
}
exports.UltimakerClient = UltimakerClient;
