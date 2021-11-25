export declare const getWifiNetworks: (baseURL: string) => Promise<[{
    ssid: string;
    security_required: boolean;
    strength: number;
}]>;
