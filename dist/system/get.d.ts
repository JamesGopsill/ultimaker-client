import { UltimakerSystemDetails } from "./interfaces";
export declare const getSystemCountry: (baseURL: string) => Promise<string>;
export declare const getSystemFirmwareStable: (baseURL: string) => Promise<string>;
export declare const getSystemFirmwareStatus: (baseURL: string) => Promise<string>;
export declare const getSystemFirmwareTesting: (baseURL: string) => Promise<string>;
export declare const getSystemFirmware: (baseURL: string) => Promise<string>;
export declare const getSystemGUID: (baseURL: string) => Promise<string>;
export declare const getSystemHardwareRevision: (baseURL: string) => Promise<string>;
export declare const getSystemHardwareTypeId: (baseURL: string) => Promise<number>;
export declare const getSystemHardware: (baseURL: string) => Promise<{
    typeid: number;
    revision: number;
}>;
export declare const getSystemHostname: (baseURL: string) => Promise<string>;
export declare const getSystemLanguage: (baseURL: string) => Promise<string>;
export declare const getSystemLog: (baseURL: string, boot?: number, lines?: number) => Promise<string[]>;
export declare const getSystemMemory: (baseURL: string) => Promise<{
    total: number;
    used: number;
}>;
export declare const getSystemName: (baseURL: string) => Promise<string>;
export declare const getSystemPlatform: (baseURL: string) => Promise<string>;
export declare const getSystemTime: (baseURL: string) => Promise<{
    utc: number;
}>;
export declare const getSystemType: (baseURL: string) => Promise<string>;
export declare const getSystemUpTime: (baseURL: string) => Promise<number>;
export declare const getSystemVariant: (baseURL: string) => Promise<number>;
export declare const getSystem: (baseURL: string) => Promise<UltimakerSystemDetails>;
