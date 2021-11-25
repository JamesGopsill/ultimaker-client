import { fetch } from "cross-fetch"

export const putWifiNetwork = (
	baseURL: string,
	ssid: string,
	passphrase: string
) => {
	return new Promise<boolean>(async (resolve, reject) => {
		let formData: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("passphrase", passphrase)
		} else {
			// Browser
			formData = new FormData()
			formData.append("passphrase", passphrase)
		}

		const res = await fetch(baseURL + "/api/v1/printer/networks/" + ssid, {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
