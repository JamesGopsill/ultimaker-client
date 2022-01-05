export declare enum UltimakerObject {
    AIRMANAGER = "airmanager",
    EVENT_HISTORY = "history/events",
    JOB_HISTORY = "history/print_jobs",
    HISTORIC_JOB = "history/print_jobs/{id}"
}
export declare type UltimakerObjectResponse<T> = T extends UltimakerObject.AIRMANAGER ? AirManager | AirManagerNotAvailable : T extends UltimakerObject.EVENT_HISTORY ? Event[] : T extends UltimakerObject.JOB_HISTORY ? HistoricJob[] : T extends UltimakerObject.HISTORIC_JOB ? HistoricJob : never;
export declare type UltimakerObjectBodyArgs<T> = T extends UltimakerObject.AIRMANAGER ? {} : T extends UltimakerObject.EVENT_HISTORY ? {} : T extends UltimakerObject.JOB_HISTORY ? {} : T extends UltimakerObject.HISTORIC_JOB ? {} : never;
export declare type UltimakerObjectIdRequired<T> = T extends UltimakerObject.AIRMANAGER ? undefined : T extends UltimakerObject.EVENT_HISTORY ? undefined : T extends UltimakerObject.JOB_HISTORY ? undefined : T extends UltimakerObject.HISTORIC_JOB ? string : never;
export interface AirManager {
    firmware_version: string;
    filter_age: number;
    filter_max_age: number;
    filter_status: string;
    status: string;
    fan_speed: number;
}
export interface AirManagerNotAvailable {
    status: string;
}
export interface Event {
    time: Date;
    type_id: number;
    message: string;
    parameters: string[];
}
export interface HistoricJob {
    time_elapsed: number;
    time_estimated: number;
    time_total: number;
    datetime_started: Date;
    datetime_finished: Date;
    datetime_cleaned: Date;
    result: string;
    source: string;
    reprint_original_uuid: string | null;
    name: string;
    uuid: string;
    interrupted_step: string;
    extruders_used: {
        [key: string]: boolean;
    };
}
