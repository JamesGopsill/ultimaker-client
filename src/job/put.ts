import { put } from "../helpers"
import { UltimakerJobTargetState } from "./interfaces"

export const putJobState = (
	baseURL: string,
	target: UltimakerJobTargetState
) => {
	const url = `${baseURL}/api/v1/print_job/state`
	const bodyArgs = {
		target,
	}
	return put(url, 204, bodyArgs)
}
