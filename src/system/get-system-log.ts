import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemLog = (
	baseURL: string,
	boot: number = 0,
	lines: number = 50
) => {
	return getTypedJSON<string[]>(baseURL + "/api/v1/system/log", {
		boot,
		lines,
	})
}
