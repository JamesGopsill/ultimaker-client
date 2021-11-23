import { getTypedJSON } from "../helpers/get-typed-json"
import { UltimakerJobTargetState } from "./put-job-state"

export const getJobState = (baseURL: string) => {
	return getTypedJSON<UltimakerJobTargetState>(
		baseURL + "/api/v1/print_job/state"
	)
}
