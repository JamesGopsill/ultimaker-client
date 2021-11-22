import { fetch } from "cross-fetch"

export const getMaterial = (baseURL: string, materialGUID: string) => {
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/materials/" + materialGUID, {
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
