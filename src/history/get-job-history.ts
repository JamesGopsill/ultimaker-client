import { fetch } from "cross-fetch"

export const getJobHistory = (
	baseURL: string,
	offset: number = 0,
	count: number = 50
) => {
	return new Promise<
		[
			{
				time_elapsed: number
				time_estimated: number
				time_total: number
				datetime_sarted: string
				datetime_finished: string
				datetime_cleaned: string
				result: string
				source: string
				reprint_original_uuid: string
				name: string
				uuid: string
			}
		]
	>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/history/print_jobs", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				offset,
				count,
			}),
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
