export interface PrinterDetails {
	heads: PrinterHead[]
	camera: {
		feed: string
	}
	bed: {
		temperature: {
			target: number
			current: number
		}
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
			}
		]
		ethernet: {
			connected: boolean
			enabled: boolean
		}
	}
	led: {
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

export interface ExtruderDetails {
	hotend: {
		id: string
		serial: string
		temperature: {
			target: number
			current: number
		}
		offset: {
			x: number
			y: number
			z: number
			state: string
		}
		statistics: {
			last_material_guid: string
			material_extruded: number
			max_temperature_exposed: number
			time_spent_hot: number
		}
	}
	feeder: {
		position: number
		max_speed: number
		jerk: number
		acceleration: number
	}
	active_material: {
		length_remaining: number
		GUID: string
	}
}

/**
 * An array of pre-defined colors to be used with setLEDColor.
 *
 */
export const UltimakerLEDColors = {
	RED: {
		hue: 0,
		saturation: 100,
		brightness: 100,
	},
	BLUE: {
		hue: 240,
		saturation: 100,
		brightness: 100,
	},
	WHITE: {
		hue: 0,
		saturation: 0,
		brightness: 100,
	},
	GREEN: {
		hue: 120,
		saturation: 100,
		brightness: 100,
	},
	YELLOW: {
		hue: 60,
		saturation: 100,
		brightness: 100,
	},
	MAGENTA: {
		hue: 300,
		saturation: 100,
		brightness: 100,
	},
	CYAN: {
		hue: 180,
		saturation: 100,
		brightness: 100,
	},
}
