import { Cartesian, ExtruderDetails, Feeder, Hotend, HotendOffset, PrinterBed, PrinterDetails, PrinterHead } from "./interfaces";
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
export declare const getPrinterHead: (baseURL: string, headIndex: string) => Promise<PrinterHead>;
export declare const getPrinterHeadPosition: (baseURL: string, headIndex: string) => Promise<Cartesian>;
export declare const getPrinterHeadMaxSpeed: (baseURL: string, headIndex: string) => Promise<Cartesian>;
export declare const getPrinterHeadAcceleration: (baseURL: string, headIndex: string) => Promise<number>;
export declare const getPrinterHeadJerk: (baseURL: string, headIndex: string) => Promise<Cartesian>;
export declare const getPrinterHeadExtruders: (baseURL: string, headIndex: string) => Promise<ExtruderDetails[]>;
export declare const getPrinterHeadExtruder: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<ExtruderDetails>;
export declare const getPrinterHeadExtruderHotendOffset: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<HotendOffset>;
export declare const getPrinterHeadExtruderFeeder: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<Feeder>;
export declare const getPrinterHeadExtruderFeederJerk: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<number>;
export declare const getPrinterHeadExtruderFeederMaxSpeed: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<number>;
export declare const getPrinterHeadExtruderFeederAcceleration: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<number>;
export declare const getPrinterHeadExtruderActiveMaterial: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<{
    length_remaining: number;
    GUID: string;
}>;
export declare const getPrinterHeadExtruderActiveMaterialLengthRemaining: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<number>;
export declare const getPrinterHeadExtruderActiveMaterialGUID: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<string>;
export declare const getPrinterHeadExtruderHotend: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<Hotend>;
export declare const getPrinterHeadExtruderHotendTemperature: (baseURL: string, headIndex: string, extruderIndex: string) => Promise<number>;
export declare const getPrinterBed: (baseURL: string) => Promise<PrinterBed>;
export declare const getPrinterBedTemperature: (baseURL: string) => Promise<{
    target: number;
    current: number;
}>;
export declare const getPrinterBedPreHeat: (baseURL: string) => Promise<{
    active: boolean;
    remaining?: number | undefined;
}>;
export declare const getPrinterBedType: (baseURL: string) => Promise<string>;
