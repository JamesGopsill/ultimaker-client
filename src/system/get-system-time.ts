import { fetch } from "cross-fetch"

export const getSystemTime = (baseURL: string) => {
	return new Promise<{
		utc: number
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/time", {
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
