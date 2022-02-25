"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLED = exports.putJobState = void 0;
const putJobState = async function (target) {
    const url = `${this.baseUrl}/api/v1/print_job/state`;
    const bodyArgs = {
        target,
    };
    return this.put(url, bodyArgs);
};
exports.putJobState = putJobState;
const putLED = async function (hsv) {
    const url = `${this.baseUrl}/api/v1/printer/led`;
    const bodyArgs = hsv;
    return this.put(url, bodyArgs);
};
exports.putLED = putLED;
