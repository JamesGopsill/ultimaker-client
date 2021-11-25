import { get } from "../helpers"

export const getWifiNetworks = (baseURL: string) => {
	return get<
		[
			{
				ssid: string
				security_required: boolean
				strength: number
			}
		]
	>(baseURL + "/api/v1/printer/network/wifi_networks")
}
