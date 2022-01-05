import { UltimakerObject, UltimakerObjectBodyArgs, UltimakerObjectIdRequired, UltimakerObjectResponse } from "./interfaces";
export * from "./interfaces";
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
export declare class UltimakerClient {
    readonly baseUrl: string;
    debug: boolean;
    constructor(ip: string, debug?: boolean);
    get<T extends UltimakerObject>(object: T, id: UltimakerObjectIdRequired<T>, bodyArgs: UltimakerObjectBodyArgs<T>): Promise<UltimakerObjectResponse<T>>;
}
