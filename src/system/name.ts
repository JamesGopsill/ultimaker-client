import { UltimakerClient } from ".."
import { fetch } from "cross-fetch"

/**
 * Retrieves the name of the Ultimaker Printer.
 *
 * @param this An instance of UltimakerClient.
 * @returns The name of the printer or null if the response fails.
 */
export const name = async function (
	this: UltimakerClient
): Promise<string | null> {
	const res = await fetch(this.endpoint + "/api/v1/system/name", {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
	})

	if (res.status == 200) return res.json()

	return null
}
