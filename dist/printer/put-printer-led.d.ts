export declare const putPrinterLED: (baseURL: string, color: {
    hue: number;
    saturation: number;
    brightness: number;
}) => Promise<Boolean>;
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
