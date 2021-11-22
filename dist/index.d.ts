import { UltimakerJobTargetState } from "./job";
import * as system from "./system";
export * from "./printer";
export * from "./job";
export * from "./system";
/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
export declare class UltimakerClient {
    /** The ip address of Ultimaker printer */
    readonly ip: string;
    readonly baseURL: string;
    /** Checks if the IP address is a valid format before creating an instance of the client.  */
    constructor(ip: string);
    getSystem(): Promise<{
        name: string;
        platform: string;
        hostname: string;
        firmware: string;
        country: string;
        language: string;
        uptime: number;
        time: {
            utc: number;
        };
        variant: string;
        memory: {
            total: number;
            used: number;
        };
        hardware: {
            typeid: number;
            revision: number;
        };
        log: string[];
        guid: string;
    }>;
    getSystemName(): Promise<string>;
    putSystemName(name: string): Promise<Boolean>;
    getSystemGUID(): Promise<string>;
    getSystemHostname(): Promise<string>;
    getSystemPlatform(): Promise<string>;
    getSystemFirmware(): Promise<string>;
    putSystemFirmware(updateType: system.UltimakerSystemUpdateType): Promise<string>;
    getSystemFirmwareStatus(): Promise<string>;
    getSystemFirmwareStable(): Promise<string>;
    getSystemFirmwareTesting(): Promise<string>;
    getSystemMemory(): Promise<{
        total: number;
        used: number;
    }>;
    getSystemTime(): Promise<{
        utc: number;
    }>;
    getSystemLog(boot?: number, lines?: number): Promise<string[]>;
    getSystemCountry(): Promise<string>;
    putSystemCountry(country: string): Promise<Boolean>;
    getSystemLanguage(): Promise<string>;
    getSystemUptime(): Promise<number>;
    getSystemType(): Promise<string>;
    getSystemVariant(): Promise<number>;
    getSystemHardware(): Promise<{
        typeid: number;
        revision: number;
    }>;
    getSystemHardwareTypeId(): Promise<number>;
    getSystemHardwareRevision(): Promise<number>;
    putSystemDisplayMessage(message: string, buttonCaption: string): Promise<Boolean>;
    getPrinterStatus(): Promise<string>;
    postPrinterBlink(frequency: number, count: number): Promise<Boolean>;
    postJob(jobname: string, gcode: string): Promise<{
        message: string;
        uuid: string;
    }>;
    putPrinterLED(color: {
        hue: number;
        saturation: number;
        brightness: number;
    }): Promise<Boolean>;
    putJob(target: UltimakerJobTargetState): Promise<Boolean>;
    getJob(): Promise<{
        time_elapsed: number;
        time_total: number;
        datetime_started: string;
        datetime_finished: string;
        datetime_cleaned: string;
        source: string;
        source_user: string;
        source_application: string;
        name: string;
        uuid: string;
        reprint_original_uuid: string;
        progress: number;
        state: string;
        result: string;
    }>;
    getJobProgress(): Promise<number>;
    getJobTimeTotal(): Promise<number>;
    getJobTimeElapsed(): Promise<number>;
}
