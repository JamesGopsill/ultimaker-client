"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltimakerJobSource = exports.UltimakerJobTargetState = void 0;
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
