import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobReprintOriginalUUID = (baseURL: string) => {
	return getTypedJSON<string>(
		baseURL + "/api/v1/print_job/reprint_original_uuid"
	)
}
