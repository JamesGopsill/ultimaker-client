import { get } from "../helpers"
import { UltimakerEvent, UltimakerHistoricJob } from "./interfaces"

export const getEventHistory = (
	baseURL: string,
	offset: number = 0,
	count: number = 50,
	typeID?: number
) => {
	const url = (baseURL = "/api/v1/history/events")
	let bodyArgs: any = {
		offset: offset,
		count: count,
	}

	if (typeof typeID != "undefined") {
		bodyArgs = {
			offset: offset,
			count: count,
			type_id: typeID,
		}
	}

	return get<UltimakerEvent[]>(url, bodyArgs)
}

export const getJobHistory = (
	baseURL: string,
	offset: number = 0,
	count: number = 50
) => {
	const url = baseURL + "/api/v1/history/print_jobs"
	const bodyArgs = {
		offset,
		count,
	}
	return get<UltimakerHistoricJob[]>(url, bodyArgs)
}

export const getSingleJobHistory = (baseURL: string, jobUUID: string) => {
	const url = baseURL + "/api/v1/history/print_jobs/" + jobUUID
	return get<UltimakerHistoricJob>(url)
}
