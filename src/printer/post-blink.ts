import { fetch } from "cross-fetch"
import { UltimakerClient } from ".."

/**
 * Blinks the Ultimaker LEDs.
 *
 * @param this An instance of UltimakerClient.
 * @param frequency The frequency of the blink.
 * @param count The number of times the LEDs will blink.
 * @returns
 */
export const postBlink = function (
	this: UltimakerClient,
	frequency: number,
	count: number
): Promise<Response> {
	return fetch(this.endpoint + "/api/v1/printer/led/blink", {
		method: "POST",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			frequency,
			count,
		}),
	})
}
