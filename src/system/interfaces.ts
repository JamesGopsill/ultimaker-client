export enum UltimakerSystemUpdateType {
	TESTING = "testing",
	STABLE = "stable",
}

export interface UltimakerSystemDetails {
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
