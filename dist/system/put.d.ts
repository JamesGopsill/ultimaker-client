import { UltimakerSystemUpdateType } from "./interfaces";
export declare const putSystemCountry: (baseURL: string, country: string) => Promise<boolean>;
export declare const putSystemDisplayMessage: (baseURL: string, message: string, buttonCaption: string) => void;
export declare const putSystemFirmware: (baseURL: string, updateType: UltimakerSystemUpdateType) => void;
export declare const putSystemName: (baseURL: string, name: string) => void;
