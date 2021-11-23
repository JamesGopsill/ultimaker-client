import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobProgress = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/print_job/progress")
}
