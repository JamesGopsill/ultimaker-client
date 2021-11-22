import { fetch } from "cross-fetch"

export const getSystem = (baseURL: string) => {
	return new Promise<{
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
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system", {
			method: "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
