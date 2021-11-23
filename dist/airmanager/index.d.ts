export declare const getAirManager: (baseURL: string) => Promise<AirManagerDetails>;
export interface AirManagerDetails {
    firmware_version: string;
    filter_age: number;
    filter_max_age: number;
    filter_status: string;
    status: string;
    fan_speed: number;
}
