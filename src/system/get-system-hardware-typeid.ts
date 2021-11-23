import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemHardwareTypeId = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/system/hardware/typeid")
}
