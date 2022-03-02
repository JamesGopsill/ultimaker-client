import { UltimakerClient as UC } from "./client-interface";
export * from "./interfaces";
export { UltimakerLEDColors } from "./led-colors";
export { ResponseError } from "./response-error";
export declare class UltimakerClient {
    readonly ip: string;
    readonly baseUrl: string;
    /** Checks if the IP address is a valid format before creating an instance of the client. */
    constructor(ip: string);
    protected get(url: string, bodyArgs?: {}): Promise<any>;
    protected put(url: string, bodyArgs?: {}): Promise<any>;
}
export interface UltimakerClient extends UC {
}
