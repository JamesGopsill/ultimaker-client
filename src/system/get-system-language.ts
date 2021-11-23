import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemLanguage = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/language")
}
