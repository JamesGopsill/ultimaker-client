import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobName = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/name")
}
