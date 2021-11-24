export interface PrinterDetails {
    heads: PrinterHead[];
    camera: {
        feed: string;
    };
    bed: {
        temperature: {
            target: number;
            current: number;
        };
    };
    network: {
        wifi: {
            connected: boolean;
            enabled: boolean;
            mode: string;
            ssid: string;
        };
        wifi_networks: [
            {
                ssid: string;
                security_required: true;
                strength: number;
            }
        ];
        ethernet: {
            connected: boolean;
            enabled: boolean;
        };
    };
    led: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    status: string;
    airmanager: {
        firmware_version: string;
        filter_age: string;
        filter_max_age: string;
        filter_status: string;
        status: string;
        fan_speed: number;
    };
}
export interface PrinterHead {
    position: Cartesian;
    max_speed: Cartesian;
    acceleration: number;
    jerk: Cartesian;
    extruders: ExtruderDetails[];
    fan: number;
}
export interface Cartesian {
    x: number;
    y: number;
    z: number;
}
export interface HotendOffset {
    x: number;
    y: number;
    z: number;
    state: string;
}
export interface Feeder {
    position: number;
    max_speed: number;
    jerk: number;
    acceleration: number;
}
export interface Hotend {
    id: string;
    serial: string;
    temperature: {
        target: number;
        current: number;
    };
    offset: HotendOffset;
    statistics: {
        last_material_guid: string;
        material_extruded: number;
        max_temperature_exposed: number;
        time_spent_hot: number;
    };
}
export interface ExtruderDetails {
    hotend: Hotend;
    feeder: Feeder;
    active_material: {
        length_remaining: number;
        GUID: string;
    };
}
/**
 * An array of pre-defined colors to be used with setLEDColor.
 *
 */
export declare const UltimakerLEDColors: {
    RED: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    BLUE: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    WHITE: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    GREEN: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    YELLOW: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    MAGENTA: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    CYAN: {
        hue: number;
        saturation: number;
        brightness: number;
    };
};
