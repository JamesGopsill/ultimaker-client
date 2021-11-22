import { fetch } from "cross-fetch"

export const putSystemFirmware = (
	baseURL: string,
	updateType: UltimakerSystemUpdateType
) => {
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				update_type: updateType,
			}),
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}

export enum UltimakerSystemUpdateType {
	TESTING = "testing",
	STABLE = "stable",
}
