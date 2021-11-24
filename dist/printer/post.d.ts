import { PrinterHeadPosition } from ".";
import { ValidateHeaderResponse } from "./interfaces";
export declare const postPrinterBlink: (baseURL: string, frequency: number, count: number) => Promise<boolean>;
export declare const postPrinterBeep: (baseURL: string, frequency: number, duration: number) => Promise<boolean>;
export declare const postPrinterHeadPosition: (baseURL: string, headID: string, position: PrinterHeadPosition) => Promise<boolean>;
export declare const postValidateHeader: (baseURL: string, gcode: string) => Promise<ValidateHeaderResponse>;
