export interface UltimakerEvent {
	time: string
	type_id: number
	message: string
	parameters: string[]
}

export interface UltimakerHistoricJob {
	time_elapsed: number
	time_estimated: number
	time_total: number
	datetime_sarted: string
	datetime_finished: string
	datetime_cleaned: string
	result: string
	source: string
	reprint_original_uuid: string
	name: string
	uuid: string
}
