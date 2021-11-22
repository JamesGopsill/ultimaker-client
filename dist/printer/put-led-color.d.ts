export declare const putLEDColor: (baseURL: string, color: {
    hue: number;
    saturation: number;
    brightness: number;
}) => Promise<Response>;
/**
 * An array of pre-defined colors to be used with setLEDColor.
 *
 * ```typescript
 * import { UltimakerClient, UltimakerLEDColors } from "ultimaker-client"
 *
 * const client = new UltimakerClient("000.000.000.000")
 * client.setLEDColor(UltimakerLEDColors.red)
 * ```
 */
export declare const UltimakerLEDColors: {
    red: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    blue: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    white: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    green: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    yellow: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    magenta: {
        hue: number;
        saturation: number;
        brightness: number;
    };
    cyan: {
        hue: number;
        saturation: number;
        brightness: number;
    };
};
