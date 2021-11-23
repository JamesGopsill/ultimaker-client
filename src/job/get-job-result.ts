import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobResult = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/result")
}
