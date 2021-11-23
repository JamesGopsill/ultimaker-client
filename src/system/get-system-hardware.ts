import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemHardware = (baseURL: string) => {
	return getTypedJSON<{
		typeid: number
		revision: number
	}>(baseURL + "/api/v1/system/hardware")
}
