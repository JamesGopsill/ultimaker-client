export declare const putJobState: (baseURL: string, target: UltimakerJobTargetState) => Promise<Boolean>;
export declare enum UltimakerJobTargetState {
    ABORT = "abort",
    PAUSE = "pause",
    PRINT = "print"
}
