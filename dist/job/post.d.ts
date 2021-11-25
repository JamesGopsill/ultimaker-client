export declare const postJob: (baseURL: string, jobname: string, gcode: string) => Promise<{
    message: string;
    uuid: string;
}>;
