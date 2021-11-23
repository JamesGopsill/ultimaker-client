import { getTypedJSON } from "../helpers/get-typed-json"

export const getSourceUser = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/source_user")
}
