import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemCountry = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/country")
}
