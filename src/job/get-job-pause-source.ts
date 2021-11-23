import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobPauseSource = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/print_job/pause_source")
}
