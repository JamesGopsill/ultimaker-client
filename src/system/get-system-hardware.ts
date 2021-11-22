import { fetch } from "cross-fetch"

export const getSystemHardware = (baseURL: string) => {
	return new Promise<{
		typeid: number
		revision: number
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/hardware", {
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
