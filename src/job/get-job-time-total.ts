import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobTimeTotal = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/print_job/time_total")
}
