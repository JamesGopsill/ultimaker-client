export declare const getJobHistory: (baseURL: string, offset?: number, count?: number) => Promise<[{
    time_elapsed: number;
    time_estimated: number;
    time_total: number;
    datetime_sarted: string;
    datetime_finished: string;
    datetime_cleaned: string;
    result: string;
    source: string;
    reprint_original_uuid: string;
    name: string;
    uuid: string;
}]>;
