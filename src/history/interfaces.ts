export interface UltimakerEvent {
	time: Date
	type_id: number
	message: string
	parameters: string[]
}

export interface UltimakerHistoricJob {
	time_elapsed: number
	time_estimated: number
	time_total: number
	datetime_started: Date
	datetime_finished: Date
	datetime_cleaned: Date
	result: string
	source: string
	reprint_original_uuid: string | null
	name: string
	uuid: string
	interrupted_step: string
	extruders_used: { [key: string]: boolean }
}
