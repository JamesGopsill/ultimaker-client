import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobSourceApplication = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/source_application")
}
