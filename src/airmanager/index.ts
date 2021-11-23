import { getTypedJSON } from "../helpers/get-typed-json"

export const getAirManager = (baseURL: string) => {
	return getTypedJSON<{
		firmware_version: string
		filter_age: number
		filter_max_age: number
		filter_status: string
		status: string
		fan_speed: number
	}>(baseURL + "/api/v1/airmanager")
}
