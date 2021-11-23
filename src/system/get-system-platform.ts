import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemPlatform = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/platform")
}
