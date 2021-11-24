import { fetch } from "cross-fetch"

export const postJob = (baseURL: string, jobname: string, gcode: string) => {
	return new Promise<{
		message: string
		uuid: string
	}>(async (resolve, reject) => {
		let formData: any
		let blob: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js

			const buffer = require("buffer")
			blob = new buffer.Blob([gcode], { type: "text/plain" })

			const FormData = require("form-data")

			formData = new FormData()
			formData.append("jobname", jobname)
			formData.append("file", blob, "test.gcode")
		} else {
			// Browser

			blob = new Blob([gcode], { type: "text/plain" })

			formData = new FormData()
			formData.append("jobname", jobname)
			formData.append("file", blob, "test.gcode")
		}

		const res = await fetch(baseURL + "/api/v1/print_job", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 201) resolve(res.json())
		reject(res)
	})
}
