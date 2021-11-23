import { fetch } from "cross-fetch"

export const putEventHistory = (
	baseURL: string,
	type_id: number,
	parameters: string[]
) => {
	return new Promise<boolean>(async (resolve, reject) => {
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

		const res = await fetch(baseURL + "/api/v1/history/events", {
			method: "PUT",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 200) resolve(true)
		reject(res)
	})
}
