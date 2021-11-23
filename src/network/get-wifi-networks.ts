import { fetch } from "cross-fetch"

export const getWifiNetworks = (baseURL: string) => {
	return new Promise<
		[
			{
				ssid: string
				security_required: boolean
				strength: number
			}
		]
	>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/network/wifi_networks", {
			method: "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
