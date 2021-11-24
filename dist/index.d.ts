import * as job from "./job";
import * as printer from "./printer";
import * as system from "./system";
import * as history from "./history";
import * as airmanager from "./airmanager";
export * as UltimakerPrinterEndpoint from "./printer";
export * as UltimakerJobEndpoint from "./job";
export * as UltimakerSystemEndpoint from "./system";
export * as UltimakerMaterialsEndpoint from "./materials";
export * as UltimakerNetworksEndpoint from "./network";
export * as UltimakerHistoryEndpoint from "./history";
export * as UltimakerAirManagerEndpoint from "./airmanager";
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
    putSystemName(name: string): void;
    getSystemGUID(): Promise<string>;
    getSystemHostname(): Promise<string>;
    getSystemPlatform(): Promise<string>;
    getSystemFirmware(): Promise<string>;
    putSystemFirmware(updateType: system.UltimakerSystemUpdateType): void;
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
    putSystemCountry(country: string): Promise<boolean>;
    getSystemLanguage(): Promise<string>;
    getSystemUpTime(): Promise<number>;
    getSystemType(): Promise<string>;
    getSystemVariant(): Promise<number>;
    getSystemHardware(): Promise<{
        typeid: number;
        revision: number;
    }>;
    getSystemHardwareTypeId(): Promise<number>;
    getSystemHardwareRevision(): Promise<string>;
    putSystemDisplayMessage(message: string, buttonCaption: string): void;
    getMaterials(): Promise<string[]>;
    getMaterial(materialGUID: string): Promise<string>;
    deleteMaterial(materialGUID: string): Promise<Boolean>;
    putMaterial(materialGUID: string): Promise<Boolean>;
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
    getJobHistory(offset?: number, count?: number): Promise<history.UltimakerHistoricJob[]>;
    getSingleJobHistory(uuid: string): Promise<history.UltimakerHistoricJob>;
    getEventHistory(offset?: number, count?: number, typeID?: number): Promise<history.UltimakerEvent[]>;
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
    getPrinterHead(headID: string): Promise<printer.PrinterHead>;
    getPrinterPosition(headID: string): Promise<printer.Cartesian>;
    getPrinterHeadMaxSpeed(headID: string): Promise<printer.Cartesian>;
    getPrinterHeadAcceleration(headID: string): Promise<number>;
    getPrinterHeadJerk(headID: string): Promise<printer.Cartesian>;
    getPrinterHeadExtruders(headID: string): Promise<printer.ExtruderDetails[]>;
    getPrinterHeadExtruder(headID: string, extruderID: string): Promise<printer.ExtruderDetails>;
    getPrinterHeadExtruderHotendOffset(headID: string, extruderID: string): Promise<printer.HotendOffset>;
    getPrinterHeadExtruderFeeder(headID: string, extruderID: string): Promise<printer.Feeder>;
    getPrinterHeadExtruderFeederJerk(headID: string, extruderID: string): Promise<number>;
    getPrinterHeadExtruderFeederMaxSpeed(headID: string, extruderID: string): Promise<number>;
    getPrinterHeadExtruderFeederAcceleration(headID: string, extruderID: string): Promise<number>;
    getPrinterHeadExtruderActiveMaterial(headID: string, extruderID: string): Promise<{
        length_remaining: number;
        GUID: string;
    }>;
    getPrinterHeadExtruderActiveMaterialLengthRemaining(headID: string, extruderID: string): Promise<number>;
    getPrinterHeadExtruderActiveMaterialGUID(headID: string, extruderID: string): Promise<string>;
    getPrinterHeadExtruderHotend(headID: string, extruderID: string): Promise<printer.Hotend>;
    getPrinterHeadExtruderHotendTemperature(headID: string, extruderID: string): Promise<number>;
    getPrinterBed(): Promise<{
        temperature: {
            target: number;
            current: number;
        };
    }>;
    getPrinterBedTemperature(): Promise<{
        target: number;
        current: number;
    }>;
    getPrinterBedPreHeat(): Promise<{
        active: boolean;
        remaining: number;
    }>;
    getPrinterBedType(): Promise<string>;
    postPrinterBlink(frequency: number, count: number): Promise<Boolean>;
    putPrinterLED(color: {
        hue: number;
        saturation: number;
        brightness: number;
    }): Promise<boolean>;
    postJob(jobname: string, gcode: string): Promise<{
        message: string;
        uuid: string;
    }>;
    putJob(target: job.UltimakerJobTargetState): Promise<Boolean>;
    getJobDateTimeCleaned(): Promise<string>;
    getJobDateTimeFinished(): Promise<string>;
    getJobDateTimeStarted(): Promise<string>;
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
    getAirManager(): Promise<airmanager.AirManagerDetails>;
}
