import * as it from "./interfaces";
export * from "./interfaces";
export declare class UltimakerClient {
    readonly ip: string;
    readonly baseUrl: string;
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(ip: string);
    protected get(url: string, bodyArgs?: {}): Promise<any>;
}
export interface UltimakerClient {
    getAirManager: () => Promise<it.AirManagerDetailsResponse | it.AirManagerNotAvailableResponse>;
    getEventHistory: () => Promise<it.UltimakerEvent[]>;
    getJobHistory: () => Promise<it.UltimakerHistoricJob[]>;
    getJob: () => Promise<it.UltimakerJobDetails>;
    getJobUUID: () => Promise<string>;
    getJobTimeTotal: () => Promise<number>;
    getJobTimeElapsed: () => Promise<number>;
    getJobState: () => Promise<it.UltimakerJobTargetState>;
    getJobSource: () => Promise<it.UltimakerJobSource>;
    getJobSourceUser: () => Promise<string>;
    getJobSourceApplication: () => Promise<string>;
    getJobResult: () => Promise<string>;
    getJobReprintOriginalUUID: () => Promise<string>;
    getJobProgress: () => Promise<number>;
    getJobPauseSource: () => Promise<string>;
    getJobName: () => Promise<string>;
    getJobDateTimeStarted: () => Promise<Date>;
    getJobDateTimeFinished: () => Promise<Date>;
    getJobDateTimeCleaned: () => Promise<Date>;
    getSingleJobHistory: (id: string) => Promise<it.UltimakerHistoricJob>;
}
