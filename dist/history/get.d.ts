import { UltimakerEvent, UltimakerHistoricJob } from "./interfaces";
export declare const getEventHistory: (baseURL: string, offset?: number, count?: number, typeID?: number | undefined) => Promise<UltimakerEvent[]>;
export declare const getJobHistory: (baseURL: string, offset?: number, count?: number) => Promise<UltimakerHistoricJob[]>;
export declare const getSingleJobHistory: (baseURL: string, jobUUID: string) => Promise<UltimakerHistoricJob>;
