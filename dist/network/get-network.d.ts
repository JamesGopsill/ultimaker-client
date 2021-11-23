export declare const getNetwork: (baseURL: string) => Promise<{
    wifi: {
        connected: boolean;
        enabled: boolean;
        mode: string;
        ssid: string;
    };
    wifi_networks: [
        {
            ssid: string;
            security_required: boolean;
            strength: number;
        }
    ];
    ethernet: {
        connected: boolean;
        enebaled: boolean;
    };
}>;
