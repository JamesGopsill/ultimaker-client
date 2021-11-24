export declare const get: <Type>(url: string, bodyArgs?: {} | undefined) => Promise<Type>;
export declare const put: (url: string, status: number, bodyArgs?: {} | undefined) => Promise<boolean>;
export declare const post: (url: string, status: number, bodyArgs?: {} | undefined) => Promise<boolean>;
