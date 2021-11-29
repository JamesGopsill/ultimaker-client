import { get } from "../helpers"
import {
	AirManagerDetailsResponse,
	AirManagerNotAvailableResponse,
} from "./interfaces"

export const getAirManager = (baseURL: string) => {
	const url = baseURL + "/api/v1/airmanager"
	return get<AirManagerDetailsResponse | AirManagerNotAvailableResponse>(url)
}
