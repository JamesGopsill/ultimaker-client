import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemTime = (baseURL: string) => {
	return getTypedJSON<{
		utc: number
	}>(baseURL + "/api/v1/system/time")
}
