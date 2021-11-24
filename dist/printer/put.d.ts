import { Cartesian } from ".";
import { HSV } from "./interfaces";
export declare const putPrinterLED: (baseURL: string, color: HSV) => Promise<boolean>;
export declare const putPrinterLEDHue: (baseURL: string, hue: number) => Promise<boolean>;
export declare const putPrinterLEDSaturation: (baseURL: string, saturation: number) => Promise<boolean>;
export declare const putPrinterLEDBrightness: (baseURL: string, brightness: number) => Promise<boolean>;
export declare const putPrinterHeadPosition: (baseURL: string, headID: string, x: number, y: number, z: number, speed: number) => Promise<boolean>;
export declare const putPrinterHeadMaxSpeed: (baseURL: string, headID: string, xyz: Cartesian) => Promise<boolean>;
export declare const putPrinterHeadJerk: (baseURL: string, headID: string, xyz: Cartesian) => Promise<boolean>;
export declare const putPrinterBedTemperature: (baseURL: string, temperature: number) => Promise<boolean>;
export declare const putPrinterBedPreHeat: (baseURL: string, temperature: number, timeout: number) => Promise<boolean>;
