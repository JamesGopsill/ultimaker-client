import { get } from "../helpers"

export const getMaterial = (baseURL: string, materialGUID: string) => {
	const url = baseURL + "/api/v1/materials/" + materialGUID
	return get<string>(url)
}

export const getMaterials = (baseURL: string) => {
	const url = baseURL + "/api/v1/materials"
	return get<string[]>(url)
}
