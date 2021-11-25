export enum UltimakerJobTargetState {
	ABORT = "abort",
	PAUSE = "pause",
	PRINT = "print",
}

export interface UltimakerJobDetails {
	time_elapsed: number
	time_total: number
	datetime_started: Date
	datetime_finished: Date
	datetime_cleaned: Date
	source: string
	source_user: string
	source_application: string
	name: string
	uuid: string
	reprint_original_uuid: string
	progress: number
	state: string
	result: string
}

export enum UltimakerJobSource {
	WEB_API,
	CALIBRATION_MENU,
}
