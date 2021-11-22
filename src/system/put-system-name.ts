import { fetch } from "cross-fetch"

export const putSystemName = (baseURL: string, name: string) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/name", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
