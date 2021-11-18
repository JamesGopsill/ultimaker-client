import { fetch } from "cross-fetch"
import { UltimakerClient } from ".."

/**
 * Set the LED color of the printer
 *
 * @param this An instance of UltimakerClient.
 * @param color The color you wish to set the Ultimaker to (in HSV).
 * @returns
 */
export const putLEDColor = function async(
	this: UltimakerClient,
	color: {
		hue: number
		saturation: number
		brightness: number
	}
): Promise<Response> {
	return fetch(this.endpoint + "/api/v1/printer/led", {
		method: "PUT",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			hue: color.hue,
			saturation: color.saturation,
			brightness: color.brightness,
		}),
	})
}

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
export const UltimakerLEDColors = {
	red: {
		hue: 0,
		saturation: 100,
		brightness: 100,
	},
	blue: {
		hue: 240,
		saturation: 100,
		brightness: 100,
	},
	white: {
		hue: 0,
		saturation: 0,
		brightness: 100,
	},
	green: {
		hue: 120,
		saturation: 100,
		brightness: 100,
	},
	yellow: {
		hue: 60,
		saturation: 100,
		brightness: 100,
	},
	magenta: {
		hue: 300,
		saturation: 100,
		brightness: 100,
	},
	cyan: {
		hue: 180,
		saturation: 100,
		brightness: 100,
	},
}
