export declare const getJob: (baseURL: string) => Promise<{
    time_elapsed: number;
    time_total: number;
    datetime_started: string;
    datetime_finished: string;
    datetime_cleaned: string;
    source: string;
    source_user: string;
    source_application: string;
    name: string;
    uuid: string;
    reprint_original_uuid: string;
    progress: number;
    state: string;
    result: string;
}>;
