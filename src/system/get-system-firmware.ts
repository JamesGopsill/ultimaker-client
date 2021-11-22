import { fetch } from "cross-fetch"

export const getSystemFirmware = (baseURL: string) => {
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/firmware", {
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
