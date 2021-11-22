import { fetch } from "cross-fetch"

export const getSystemHardwareRevision = (baseURL: string) => {
	return new Promise<number>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/hardware/revision", {
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
