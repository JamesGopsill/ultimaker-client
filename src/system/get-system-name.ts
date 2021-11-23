import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemName = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/name")
}
