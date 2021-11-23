export declare enum UltimakerJobTargetState {
    ABORT = "abort",
    PAUSE = "pause",
    PRINT = "print"
}
export interface UltimakerJobDetails {
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
}
export declare enum UltimakerJobSource {
    WEB_API = 0,
    CALIBRATION_MENU = 1
}
