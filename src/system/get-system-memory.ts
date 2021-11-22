import { fetch } from "cross-fetch"

export const getSystemMemory = (baseURL: string) => {
	return new Promise<{
		total: number
		used: number
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/memory", {
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
