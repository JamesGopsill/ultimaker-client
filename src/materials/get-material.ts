import { getTypedJSON } from "../helpers/get-typed-json"

export const getMaterial = (baseURL: string, materialGUID: string) => {
	return getTypedJSON<string>(baseURL + "/api/v1/materials/" + materialGUID)
}
