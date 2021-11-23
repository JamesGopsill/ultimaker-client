import { getTypedJSON } from "../helpers/get-typed-json"

export const getPrinterStatus = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/printer")
}
