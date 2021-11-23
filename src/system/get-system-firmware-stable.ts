import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemFirmwareStable = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/firmware/stable")
}
