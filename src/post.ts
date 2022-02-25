import { fetch } from "cross-fetch"
import { UltimakerClient } from "."
import { ResponseError } from "./response-error"

export const postJob = async function (
	this: UltimakerClient,
	jobname: string,
	gcode: string
) {
	let formData: any

	// Check if we are running in the browser or on node.js
	if (typeof window === "undefined") {
		// Node.js
		const FormData = require("form-data")
		formData = new FormData()
		formData.append("jobname", jobname)
		formData.append("file", gcode, "client.gcode")
	} else {
		// Browser
		const blob = new Blob([gcode], { type: "text/plain" })
		formData = new FormData()
		formData.append("jobname", jobname)
		formData.append("file", blob, "client.gcode")
	}

	const url = `${this.baseUrl}/api/v1/print_job`

	return fetch(url, {
		method: "POST",
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
		body: formData,
	}).then(async (r) => {
		if (r.ok) {
			return r.json()
		}
		throw new ResponseError(r)
	})
}
