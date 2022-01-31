import { fetch } from "cross-fetch"
import { UltimakerClient } from "."
import { ResponseError } from "./response-error"

export const putEventHistory = async function (
	this: UltimakerClient,
	type_id: number,
	parameters: string[]
) {
	let formData: any

	// Check if we are running in the browser or on node.js
	if (typeof window === "undefined") {
		// Node.js
		const FormData = require("form-data")
		formData = new FormData()
		formData.append("type_id", type_id)
		formData.append("parameters", parameters)
	} else {
		// Browser
		formData = new FormData()
		formData.append("type_id", type_id)
		formData.append("parameters", parameters)
	}

	return fetch(`${this.baseUrl}/api/v1/history/events`, {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formData,
	}).then(async (r) => {
		if (r.ok) {
			const json = await r.json()
			return json
		}
		throw new ResponseError(r)
	})
}
