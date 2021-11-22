export declare const putJob: (baseURL: string, target: UltimakerJobTargetState) => Promise<Boolean>;
export declare enum UltimakerJobTargetState {
    ABORT = "abort",
    PAUSE = "pause",
    PRINT = "print"
}
