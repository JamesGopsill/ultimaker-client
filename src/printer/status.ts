import { UltimakerClient } from ".."
import { fetch } from "cross-fetch"

/**
 * Retrieves the status of the printer.
 *
 * @param this An instance of UltimakerClient.
 * @returns Returns the status of the printer or null if the request fails.
 */
export const status = async function (
	this: UltimakerClient
): Promise<string | null> {
	let res = await fetch(this.endpoint + "/api/v1/printer", {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
	})

	if (res.status == 200) {
		const data = await res.json()
		return data.status
	}

	return null
}
