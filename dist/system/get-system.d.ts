export declare const getSystem: (baseURL: string) => Promise<{
    name: string;
    platform: string;
    hostname: string;
    firmware: string;
    country: string;
    language: string;
    uptime: number;
    time: {
        utc: number;
    };
    variant: string;
    memory: {
        total: number;
        used: number;
    };
    hardware: {
        typeid: number;
        revision: number;
    };
    log: string[];
    guid: string;
}>;
