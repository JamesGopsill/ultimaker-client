export interface AirManagerDetailsResponse {
    firmware_version: string;
    filter_age: number;
    filter_max_age: number;
    filter_status: string;
    status: string;
    fan_speed: number;
}
export interface AirManagerNotAvailableResponse {
    status: string;
}
export interface UltimakerEvent {
    time: Date;
    type_id: number;
    message: string;
    parameters: string[];
}
export interface UltimakerHistoricJob {
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
export declare enum UltimakerJobTargetState {
    ABORT = "abort",
    PAUSE = "pause",
    PRINT = "print"
}
export interface UltimakerJobDetails {
    time_elapsed: number;
    time_total: number;
    datetime_started: Date;
    datetime_finished: Date;
    datetime_cleaned: Date;
    source: string;
    source_user: string;
    source_application: string;
    name: string;
    uuid: string;
    reprint_original_uuid: string;
    progress: number;
    state: string;
    result: string;
}
export declare enum UltimakerJobSource {
    WEB_API = 0,
    CALIBRATION_MENU = 1
}
