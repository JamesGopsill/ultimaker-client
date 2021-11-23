import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemMemory = (baseURL: string) => {
	return getTypedJSON<{
		total: number
		used: number
	}>(baseURL + "/api/v1/system/memory")
}
