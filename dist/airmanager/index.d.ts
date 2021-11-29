import { AirManagerDetailsResponse, AirManagerNotAvailableResponse } from "./interfaces";
export declare const getAirManager: (baseURL: string) => Promise<AirManagerDetailsResponse | AirManagerNotAvailableResponse>;
