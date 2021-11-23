import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemUpTime = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/system/uptime")
}
