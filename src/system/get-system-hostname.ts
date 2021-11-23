import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemHostname = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/hostname")
}
