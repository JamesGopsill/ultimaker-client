import { Cartesian, ExtruderDetails, PrinterDetails, PrinterHead } from "./interfaces";
export declare const getPrinter: (baseURL: string) => Promise<PrinterDetails>;
export declare const getPrinterStatus: (baseURL: string) => Promise<string>;
export declare const getPrinterLED: (baseURL: string) => Promise<{
    hue: number;
    saturation: number;
    brightness: number;
}>;
export declare const getPrinterLEDHue: (baseURL: string) => Promise<number>;
export declare const getPrinterLEDSaturation: (baseURL: string) => Promise<number>;
export declare const getPrinterLEDBrightness: (baseURL: string) => Promise<number>;
export declare const getPrinterHeads: (baseURL: string) => Promise<PrinterHead[]>;
export declare const getPrinterHead: (baseURL: string, headID: string) => Promise<PrinterHead>;
export declare const getPrinterHeadPosition: (baseURL: string, headID: string) => Promise<Cartesian>;
export declare const getPrinterHeadMaxSpeed: (baseURL: string, headID: string) => Promise<Cartesian>;
export declare const getPrinterHeadAcceleration: (baseURL: string, headID: string) => Promise<number>;
export declare const getPrinterHeadJerk: (baseURL: string, headID: string) => Promise<Cartesian>;
export declare const getPrinterHeadExtruders: (baseURL: string, headID: string) => Promise<ExtruderDetails[]>;
export declare const getPrinterHeadExtruder: (baseURL: string, headID: string, extruderID: string) => Promise<ExtruderDetails>;
export declare const getPrinterBed: (baseURL: string) => Promise<{
    temperature: {
        target: number;
        current: number;
    };
}>;
export declare const getPrinterBedTemperature: (baseURL: string) => Promise<{
    target: number;
    current: number;
}>;
export declare const getPrinterBedPreHeat: (baseURL: string) => Promise<{
    active: boolean;
    remaining: number;
}>;
export declare const getPrinterBedType: (baseURL: string) => Promise<string>;
