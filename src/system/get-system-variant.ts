import { getTypedJSON } from "../helpers/get-typed-json"

export const getSystemVariant = (baseURL: string) => {
	return getTypedJSON<number>(baseURL + "/api/v1/system/variant")
}
