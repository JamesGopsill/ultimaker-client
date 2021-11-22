import { fetch } from "cross-fetch"

export const getSystemHostname = (baseURL: string) => {
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/hostname", {
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
