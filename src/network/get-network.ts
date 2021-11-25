import { get } from "../helpers"

export const getNetwork = (baseURL: string) => {
	return get<{
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
	}>(baseURL + "/api/v1/printer/network")
}
