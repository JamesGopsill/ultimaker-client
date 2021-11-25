import { get } from "../helpers"
import { UltimakerEvent, UltimakerHistoricJob } from "./interfaces"

export const getEventHistory = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/history/events`
	const events = await get<UltimakerEvent[]>(url)
	for (const event of events) {
		event.time = new Date(event.time)
	}
	return events
}

export const getJobHistory = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/history/print_jobs`
	const history = await get<UltimakerHistoricJob[]>(url)
	for (const job of history) {
		job.datetime_cleaned = new Date(job.datetime_cleaned)
		job.datetime_started = new Date(job.datetime_started)
		job.datetime_finished = new Date(job.datetime_finished)
	}
	return history
}

export const getSingleJobHistory = async (baseURL: string, jobUUID: string) => {
	const url = `${baseURL}/api/v1/history/print_jobs/${jobUUID}`
	const job = await get<UltimakerHistoricJob>(url)
	job.datetime_cleaned = new Date(job.datetime_cleaned)
	job.datetime_started = new Date(job.datetime_started)
	job.datetime_finished = new Date(job.datetime_finished)
	return job
}
