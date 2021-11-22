import { fetch } from "cross-fetch"

export const deleteMaterial = (baseURL: string, materialGUID: string) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/materials/" + materialGUID, {
			method: "DELETE",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
