import { fetch } from "cross-fetch"

export const deleteWifiNetwork = (baseURL: string, ssid: string) => {
	return new Promise<boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/networks/" + ssid, {
			method: "DELETE",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
