import { fetch } from "cross-fetch"

export const putPrinterLED = (
	baseURL: string,
	color: {
		hue: number
		saturation: number
		brightness: number
	}
) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/led", {
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

		if (res.status == 204) resolve(true)
		reject(res)
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
	RED: {
		hue: 0,
		saturation: 100,
		brightness: 100,
	},
	BLUE: {
		hue: 240,
		saturation: 100,
		brightness: 100,
	},
	WHITE: {
		hue: 0,
		saturation: 0,
		brightness: 100,
	},
	GREEN: {
		hue: 120,
		saturation: 100,
		brightness: 100,
	},
	YELLOW: {
		hue: 60,
		saturation: 100,
		brightness: 100,
	},
	MAGENTA: {
		hue: 300,
		saturation: 100,
		brightness: 100,
	},
	CYAN: {
		hue: 180,
		saturation: 100,
		brightness: 100,
	},
}
