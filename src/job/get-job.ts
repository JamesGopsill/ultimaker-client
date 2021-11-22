import { fetch } from "cross-fetch"

export const getJob = (baseURL: string) => {
	return new Promise<{
		time_elapsed: number
		time_total: number
		datetime_started: string
		datetime_finished: string
		datetime_cleaned: string
		source: string
		source_user: string
		source_application: string
		name: string
		uuid: string
		reprint_original_uuid: string
		progress: number
		state: string
		result: string
	}>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/print_job", {
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
