import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemGUID = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/guid")
}
