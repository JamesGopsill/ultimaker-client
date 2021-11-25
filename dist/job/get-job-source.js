"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerJobSource = exports.getJobSource = void 0;
const get_typed_json_1 = require("../helpers/get-typed-json");
const getJobSource = (baseURL) => {
    return (0, get_typed_json_1.getTypedJSON)(baseURL + "/api/v1/print_job/source");
};
exports.getJobSource = getJobSource;
var UltimakerJobSource;
(function (UltimakerJobSource) {
    UltimakerJobSource[UltimakerJobSource["WEB_API"] = 0] = "WEB_API";
    UltimakerJobSource[UltimakerJobSource["CALIBRATION_MENU"] = 1] = "CALIBRATION_MENU";
})(UltimakerJobSource = exports.UltimakerJobSource || (exports.UltimakerJobSource = {}));
