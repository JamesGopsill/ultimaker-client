import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobTimeElapsed = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/print_job/time_elapsed")
}
