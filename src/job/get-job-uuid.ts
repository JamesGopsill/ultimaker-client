import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobUUID = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/uuid")
}
