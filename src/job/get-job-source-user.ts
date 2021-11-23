import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobSourceUser = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/source_user")
}
