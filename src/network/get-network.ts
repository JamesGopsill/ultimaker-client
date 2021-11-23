import { fetch } from "cross-fetch"

export const getNetwork = (baseURL: string) => {
	return new Promise<{
		wifi: {
			connected: boolean
			enabled: boolean
			mode: string
			ssid: string
		}
		wifi_networks: [
			{
				ssid: string
				security_required: boolean
				strength: number
			}
		]
		ethernet: {
			connected: boolean
			enebaled: boolean
		}
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/network", {
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
