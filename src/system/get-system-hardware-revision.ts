import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemHardwareRevision = (baseURL: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/system/hardware/revision")
}
