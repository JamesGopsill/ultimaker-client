import { fetch } from "cross-fetch"

export const getSystemLog = (
	baseURL: string,
	boot: number = 0,
	lines: number = 50
) => {
	return new Promise<string[]>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/log", {
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
