"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemUpdateType = exports.PrinterHeadPosition = exports.UltimakerJobSource = exports.UltimakerJobTargetState = void 0;
var UltimakerJobTargetState;
(function (UltimakerJobTargetState) {
    UltimakerJobTargetState["ABORT"] = "abort";
    UltimakerJobTargetState["PAUSE"] = "pause";
    UltimakerJobTargetState["PRINT"] = "print";
})(UltimakerJobTargetState = exports.UltimakerJobTargetState || (exports.UltimakerJobTargetState = {}));
var UltimakerJobSource;
(function (UltimakerJobSource) {
    UltimakerJobSource[UltimakerJobSource["WEB_API"] = 0] = "WEB_API";
    UltimakerJobSource[UltimakerJobSource["CALIBRATION_MENU"] = 1] = "CALIBRATION_MENU";
})(UltimakerJobSource = exports.UltimakerJobSource || (exports.UltimakerJobSource = {}));
var PrinterHeadPosition;
(function (PrinterHeadPosition) {
    PrinterHeadPosition["HOME"] = "home";
})(PrinterHeadPosition = exports.PrinterHeadPosition || (exports.PrinterHeadPosition = {}));
var SystemUpdateType;
(function (SystemUpdateType) {
    SystemUpdateType["TESTING"] = "testing";
    SystemUpdateType["STABLE"] = "stable";
})(SystemUpdateType = exports.SystemUpdateType || (exports.SystemUpdateType = {}));
