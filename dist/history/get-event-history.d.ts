export declare const getEventHistory: (baseURL: string, offset?: number, count?: number, typeID?: number | undefined) => Promise<[{
    time: string;
    type_id: number;
    message: string;
    parameters: string[];
}]>;
