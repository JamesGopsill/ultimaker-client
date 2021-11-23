import { get } from "../helpers"
import {
	UltimakerJobDetails,
	UltimakerJobSource,
	UltimakerJobTargetState,
} from "./interfaces"

export const getJob = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job"
	return get<UltimakerJobDetails>(url)
}

export const getJobUUID = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/uuid"
	return get<string>(url)
}

export const getJobTimeTotal = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/time_total"
	return get<number>(url)
}

export const getJobTimeElapsed = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/time_elapsed"
	return get<number>(url)
}

export const getJobState = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/state"
	return get<UltimakerJobTargetState>(url)
}

export const getJobSource = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/source"
	return get<UltimakerJobSource>(url)
}

export const getJobSourceUser = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/source_user"
	return get<string>(url)
}

export const getJobSourceApplication = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/source_application"
	return get<string>(url)
}

export const getJobResult = (baseURL: string) => {
	return get<string>(baseURL + "/api/v1/print_job/result")
}

export const getJobReprintOriginalUUID = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/reprint_original_uuid"
	return get<string>(url)
}

export const getJobProgress = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/progress"
	return get<number>(url)
}

export const getJobPauseSource = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/pause_source"
	return get<string>(url)
}

export const getJobName = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/name"
	return get<string>(url)
}

export const getJobDateTimeStarted = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/datetime_started"
	return get<string>(url)
}

export const getJobDateTimeFinished = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/datetime_cleaned"
	return get<string>(url)
}

export const getJobDateTimeCleaned = (baseURL: string) => {
	const url = baseURL + "/api/v1/print_job/datetime_cleaned"
	return get<string>(url)
}
