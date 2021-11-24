"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterHeadPosition = exports.UltimakerLEDColors = void 0;
/**
 * An array of pre-defined colors to be used with setLEDColor.
 *
 */
exports.UltimakerLEDColors = {
    RED: {
        hue: 0,
        saturation: 100,
        brightness: 100,
    },
    BLUE: {
        hue: 240,
        saturation: 100,
        brightness: 100,
    },
    WHITE: {
        hue: 0,
        saturation: 0,
        brightness: 100,
    },
    GREEN: {
        hue: 120,
        saturation: 100,
        brightness: 100,
    },
    YELLOW: {
        hue: 60,
        saturation: 100,
        brightness: 100,
    },
    MAGENTA: {
        hue: 300,
        saturation: 100,
        brightness: 100,
    },
    CYAN: {
        hue: 180,
        saturation: 100,
        brightness: 100,
    },
};
var PrinterHeadPosition;
(function (PrinterHeadPosition) {
    PrinterHeadPosition["HOME"] = "home";
})(PrinterHeadPosition = exports.PrinterHeadPosition || (exports.PrinterHeadPosition = {}));
