export declare const putSystemFirmware: (baseURL: string, updateType: UltimakerSystemUpdateType) => Promise<string>;
export declare enum UltimakerSystemUpdateType {
    TESTING = "testing",
    STABLE = "stable"
}
