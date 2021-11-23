import { fetch } from "cross-fetch"
import { UltimakerJobTargetState } from "./interfaces"

export const putJobState = (
	baseURL: string,
	target: UltimakerJobTargetState
) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/print_job/state", {
			method: "PUT",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				target: target,
			}),
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
