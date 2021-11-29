export interface AirManagerDetailsResponse {
	firmware_version: string
	filter_age: number
	filter_max_age: number
	filter_status: string
	status: string
	fan_speed: number
}

export interface AirManagerNotAvailableResponse {
	status: string
}
