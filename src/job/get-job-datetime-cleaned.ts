import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobDateTimeCleaned = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/datetime_cleaned")
}
