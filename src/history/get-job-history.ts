import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobHistory = (
	baseURL: string,
	offset: number = 0,
	count: number = 50
) => {
	return getTypedJSON<
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
	>(baseURL + "/api/v1/history/print_jobs", {
		offset,
		count,
	})
}
