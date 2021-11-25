import { get } from "../helpers"
import {
	UltimakerJobDetails,
	UltimakerJobSource,
	UltimakerJobTargetState,
} from "./interfaces"

export const getJob = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job`
	const job = await get<UltimakerJobDetails>(url)
	job.datetime_cleaned = new Date(job.datetime_cleaned)
	job.datetime_finished = new Date(job.datetime_finished)
	job.datetime_started = new Date(job.datetime_started)
	return job
}

export const getJobUUID = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/uuid`
	return get<string>(url)
}

export const getJobTimeTotal = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/time_total`
	return get<number>(url)
}

export const getJobTimeElapsed = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/time_elapsed`
	return get<number>(url)
}

export const getJobState = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/state`
	return get<UltimakerJobTargetState>(url)
}

export const getJobSource = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/source`
	return get<UltimakerJobSource>(url)
}

export const getJobSourceUser = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/source_user`
	return get<string>(url)
}

export const getJobSourceApplication = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/source_application`
	return get<string>(url)
}

export const getJobResult = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/result`
	return get<string>(url)
}

export const getJobReprintOriginalUUID = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/reprint_original_uuid`
	return get<string>(url)
}

export const getJobProgress = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/progress`
	return get<number>(url)
}

export const getJobPauseSource = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/pause_source`
	return get<string>(url)
}

export const getJobName = (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/name`
	return get<string>(url)
}

export const getJobDateTimeStarted = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/datetime_started`
	const d = await get<string>(url)
	if (d.length > 0) {
		return new Date(d)
	}
	return null
}

export const getJobDateTimeFinished = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/datetime_cleaned`
	const d = await get<string>(url)
	if (d.length > 0) {
		return new Date(d)
	}
	return null
}

export const getJobDateTimeCleaned = async (baseURL: string) => {
	const url = `${baseURL}/api/v1/print_job/datetime_cleaned`
	const d = await get<string>(url)
	if (d.length > 0) {
		return new Date(d)
	}
	return null
}
