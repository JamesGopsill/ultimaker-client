import { getTypedJSON } from "../helpers/get-typed-json"

export const getWifiNetworks = (baseURL: string) => {
	return getTypedJSON<
		[
			{
				ssid: string
				security_required: boolean
				strength: number
			}
		]
	>(baseURL + "/api/v1/printer/network/wifi_networks")
}
