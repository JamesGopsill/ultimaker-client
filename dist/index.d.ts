import * as job from "./job";
import * as printer from "./printer";
import * as system from "./system";
import * as history from "./history";
export * from "./printer/interfaces";
export * from "./job/interfaces";
export * from "./system/interfaces";
export * from "./history/interfaces";
export * from "./airmanager/interfaces";
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
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(ip: string);
    getSystem(): Promise<system.UltimakerSystemDetails>;
    getSystemName(): Promise<string>;
    putSystemName(name: string): Promise<boolean>;
    getSystemGUID(): Promise<string>;
    getSystemHostname(): Promise<string>;
    getSystemPlatform(): Promise<string>;
    getSystemFirmware(): Promise<string>;
    putSystemFirmware(updateType: system.UltimakerSystemUpdateType): Promise<boolean>;
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
    getSystemLog(): Promise<string[]>;
    getSystemCountry(): Promise<string>;
    putSystemCountry(country: string): Promise<boolean>;
    getSystemLanguage(): Promise<string>;
    getSystemUpTime(): Promise<number>;
    getSystemType(): Promise<string>;
    getSystemVariant(): Promise<string>;
    getSystemHardware(): Promise<{
        typeid: number;
        revision: number;
    }>;
    getSystemHardwareTypeId(): Promise<number>;
    getSystemHardwareRevision(): Promise<string>;
    putSystemDisplayMessage(message: string, buttonCaption: string): Promise<boolean>;
    getMaterials(): Promise<string[]>;
    getMaterial(materialGUID: string): Promise<string>;
    deleteMaterial(materialGUID: string): Promise<Boolean>;
    putMaterial(materialGUID: string): Promise<boolean>;
    getNetwork(): Promise<{
        wifi: {
            connected: boolean;
            enabled: boolean;
            mode: string;
            ssid: string;
        };
        wifi_networks: [{
            ssid: string;
            security_required: boolean;
            strength: number;
        }];
        ethernet: {
            connected: boolean;
            enebaled: boolean;
        };
    }>;
    getWifiNetworks(): Promise<[{
        ssid: string;
        security_required: boolean;
        strength: number;
    }]>;
    deleteWifiNetwork(ssid: string): Promise<boolean>;
    putWifiNetwork(ssid: string, passphrase: string): Promise<boolean>;
    getJobHistory(): Promise<history.UltimakerHistoricJob[]>;
    getSingleJobHistory(uuid: string): Promise<history.UltimakerHistoricJob>;
    getEventHistory(): Promise<history.UltimakerEvent[]>;
    putEventHistory(typeID: number, parameters: string[]): Promise<boolean>;
    getPrinter(): Promise<printer.PrinterDetails>;
    getPrinterStatus(): Promise<string>;
    getPrinterLED(): Promise<{
        hue: number;
        saturation: number;
        brightness: number;
    }>;
    getPrinterLEDHue(): Promise<number>;
    getPrinterLEDSaturation(): Promise<number>;
    getPrinterLEDBrightness(): Promise<number>;
    getPrinterHeads(): Promise<printer.PrinterHead[]>;
    getPrinterHead(headIndex: string): Promise<printer.PrinterHead>;
    getPrinterPosition(headIndex: string): Promise<printer.Cartesian>;
    getPrinterHeadMaxSpeed(headIndex: string): Promise<printer.Cartesian>;
    getPrinterHeadAcceleration(headIndex: string): Promise<number>;
    getPrinterHeadJerk(headIndex: string): Promise<printer.Cartesian>;
    getPrinterHeadExtruders(headIndex: string): Promise<printer.ExtruderDetails[]>;
    getPrinterHeadExtruder(headIndex: string, extruderIndex: string): Promise<printer.ExtruderDetails>;
    getPrinterHeadExtruderHotendOffset(headIndex: string, extruderIndex: string): Promise<printer.HotendOffset>;
    getPrinterHeadExtruderFeeder(headIndex: string, extruderIndex: string): Promise<printer.Feeder>;
    getPrinterHeadExtruderFeederJerk(headIndex: string, extruderIndex: string): Promise<number>;
    getPrinterHeadExtruderFeederMaxSpeed(headIndex: string, extruderIndex: string): Promise<number>;
    getPrinterHeadExtruderFeederAcceleration(headIndex: string, extruderIndex: string): Promise<number>;
    getPrinterHeadExtruderActiveMaterial(headIndex: string, extruderIndex: string): Promise<{
        length_remaining: number;
        GUID: string;
    }>;
    getPrinterHeadExtruderActiveMaterialLengthRemaining(headIndex: string, extruderIndex: string): Promise<number>;
    getPrinterHeadExtruderActiveMaterialGUID(headIndex: string, extruderIndex: string): Promise<string>;
    getPrinterHeadExtruderHotend(headIndex: string, extruderIndex: string): Promise<printer.Hotend>;
    getPrinterHeadExtruderHotendTemperature(headIndex: string, extruderIndex: string): Promise<number>;
    getPrinterBed(): Promise<printer.PrinterBed>;
    getPrinterBedTemperature(): Promise<{
        target: number;
        current: number;
    }>;
    getPrinterBedPreHeat(): Promise<{
        active: boolean;
        remaining?: number | undefined;
    }>;
    getPrinterBedType(): Promise<string>;
    postPrinterBlink(frequency: number, count: number): Promise<boolean>;
    putPrinterLED(color: printer.HSV): Promise<boolean>;
    putPrinterLEDHue(hue: number): Promise<boolean>;
    putPrinterLEDSaturation(saturation: number): Promise<boolean>;
    putPrinterLEDBrightness(brightness: number): Promise<boolean>;
    putPrinterHeadPosition(headIndex: string, x: number, y: number, z: number, speed: number): Promise<boolean>;
    putPrinterHeadMaxSpeed(headIndex: string, xyz: printer.Cartesian): Promise<boolean>;
    putPrinterHeadJerk(headIndex: string, xyz: printer.Cartesian): Promise<boolean>;
    putPrinterBedTemperature(temperature: number): Promise<boolean>;
    putPrinterBedPreHeat(temperature: number, duration: number): Promise<boolean>;
    postJob(jobname: string, gcode: string): Promise<{
        message: string;
        uuid: string;
    }>;
    putJob(target: job.UltimakerJobTargetState): Promise<boolean>;
    getJobDateTimeCleaned(): Promise<Date | null>;
    getJobDateTimeFinished(): Promise<Date | null>;
    getJobDateTimeStarted(): Promise<Date | null>;
    getJobName(): Promise<string>;
    getJobPauseSource(): Promise<string>;
    getJobProgress(): Promise<number>;
    getJobReprintOriginalUUID(): Promise<string>;
    getJobResult(): Promise<string>;
    getJobSourceApplication(): Promise<string>;
    getJobSourceUser(): Promise<string>;
    getJobSource(): Promise<job.UltimakerJobSource>;
    getJobState(): Promise<job.UltimakerJobTargetState>;
    getJobTimeElapsed(): Promise<number>;
    getJobTimeTotal(): Promise<number>;
    getJobUUID(): Promise<string>;
    getJob(): Promise<job.UltimakerJobDetails>;
    getAirManager(): Promise<import("./airmanager/interfaces").AirManagerDetailsResponse | import("./airmanager/interfaces").AirManagerNotAvailableResponse>;
}
