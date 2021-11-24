//import { fetch } from "cross-fetch"
import { put } from "../helpers"

export const putMaterial = (baseURL: string, materialGUID: string) => {
	const url = `${baseURL}/api/v1/materials/${materialGUID}`
	return put(url, 204)
}
