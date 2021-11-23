import { getTypedJSON } from "../helpers/get-typed-json"

export const getNetwork = (baseURL: string) => {
	return getTypedJSON<{
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
