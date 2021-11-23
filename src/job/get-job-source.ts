import { getTypedJSON } from "../helpers/get-typed-json"

export const getJobSource = (baseURL: string) => {
	return getTypedJSON<UltimakerJobSource>(baseURL + "/api/v1/print_job/source")
}

export enum UltimakerJobSource {
	WEB_API,
	CALIBRATION_MENU,
}
