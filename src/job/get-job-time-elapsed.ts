import { fetch } from "cross-fetch"

export const getJobTimeElapsed = (baseURL: string) => {
	return new Promise<number>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/print_job/time_elapsed", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
