import { UltimakerEvent, UltimakerHistoricJob } from "./interfaces";
export declare const getEventHistory: (baseURL: string) => Promise<UltimakerEvent[]>;
export declare const getJobHistory: (baseURL: string) => Promise<UltimakerHistoricJob[]>;
export declare const getSingleJobHistory: (baseURL: string, jobUUID: string) => Promise<UltimakerHistoricJob>;
