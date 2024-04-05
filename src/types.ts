export type HttpResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: undefined
	  } & Response)

export interface AuthRequest {
	id: string
	key: string
}

export interface AuthCheck {
	message: string
}

export interface AirManagerDetails {
	firmware_version: string
	filter_age: number
	filter_max_age: number
	filter_status: string
	status: string
	fan_speed: number
}

export interface AirManagerNotAvailable {
	status: string
}

export interface Event {
	time: Date
	type_id: number
	message: string
	parameters: string[]
}

export interface HistoricJob {
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

export enum JobTargetState {
	ABORT = "abort",
	PAUSE = "pause",
	PRINT = "print",
}

export interface Job {
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

export enum JobSource {
	WEB_API,
	CALIBRATION_MENU,
}

export interface Printer {
	heads: PrinterHead[]
	camera: {
		feed: string
	}
	beep: {}
	diagonistics: {}
	bed: {
		pre_heat: {
			active: boolean
		}
		temperature: {
			target: number
			current: number
		}
		type: string
	}
	network: {
		wifi: {
			connected: boolean
			enabled: boolean
			mode: string
			ssid: string
		}
		wifi_networks: [
			{
				ssid: string
				security_required: true
				strength: number
			},
		]
		ethernet: {
			connected: boolean
			enabled: boolean
		}
	}
	led: {
		blink: {}
		hue: number
		saturation: number
		brightness: number
	}
	status: string
	airmanager: {
		firmware_version: string
		filter_age: string
		filter_max_age: string
		filter_status: string
		status: string
		fan_speed: number
	}
}

export interface PrinterHead {
	position: Cartesian
	max_speed: Cartesian
	acceleration: number
	jerk: Cartesian
	extruders: ExtruderDetails[]
	fan: number
}

export interface Cartesian {
	x: number
	y: number
	z: number
}

export interface HotendOffset {
	x: number
	y: number
	z: number
	state: string
}

export interface Feeder {
	position: number
	max_speed: number
	jerk: number
	acceleration: number
}

export interface Hotend {
	id: string
	serial: string
	temperature: PrinterBedTemperature
	offset: HotendOffset
	statistics: {
		last_material_guid: string
		material_extruded: number
		max_temperature_exposed: number
		time_spent_hot: number
	}
}

export interface ExtruderDetails {
	hotend: Hotend
	feeder: Feeder
	active_material: {
		length_remaining: number
		GUID: string
	}
}

export interface ValidateHeaderResponse {
	fault_code: string
	fault_level: string
	message: string
	data: string
}

export enum PrinterHeadPosition {
	HOME = "home",
}

export interface HSV {
	hue: number
	saturation: number
	brightness: number
}

export interface PrinterBed {
	pre_heat: PrinterBedPreHeat
	temperature: PrinterBedTemperature
	type: string
}

export interface PrinterBedTemperature {
	current: number
	target: number
}

export interface PrinterBedPreHeat {
	active: boolean
	remaining?: number
}

export enum SystemUpdateType {
	TESTING = "testing",
	STABLE = "stable",
}

export interface System {
	name: string
	platform: string
	hostname: string
	firmware: string
	country: string
	language: string
	uptime: number
	time: {
		utc: number
	}
	type: string
	variant: string
	memory: {
		total: number
		used: number
	}
	hardware: {
		typeid: number
		revision: number
	}
	log: string
	guid: string
}

export interface SystemMemory {
	total: number
	used: number
}

export interface SystemTime {
	utc: number
}

export interface SystemHardware {
	typeid: number
	revision: number
}

export interface PostJobResponse {
	message: string
	uuid: string
}
