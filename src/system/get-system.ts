import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystem = (baseURL: string) => {
	return getTypedJSON<{
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
		variant: string
		memory: {
			total: number
			used: number
		}
		hardware: {
			typeid: number
			revision: number
		}
		log: string[]
		guid: string
	}>(baseURL + "/api/v1/system")
}
