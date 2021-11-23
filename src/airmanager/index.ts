import { get } from "../helpers"

export const getAirManager = (baseURL: string) => {
	const url = baseURL + "/api/v1/airmanager"
	return get<AirManagerDetails>(url)
}

export interface AirManagerDetails {
	firmware_version: string
	filter_age: number
	filter_max_age: number
	filter_status: string
	status: string
	fan_speed: number
}
