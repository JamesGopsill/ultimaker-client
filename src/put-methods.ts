import type { UltimakerClient } from "./index.js"
import type * as Def from "./definitions"

export const putJobState = async function (
	this: UltimakerClient,
	target: Def.UltimakerJobTargetState
) {
	const url = `${this.baseUrl}/api/v1/print_job/state`
	const bodyArgs = {
		target,
	}
	return this.put(url, bodyArgs)
}

export const putLED = async function (this: UltimakerClient, hsv: Def.HSV) {
	const url = `${this.baseUrl}/api/v1/printer/led`
	const bodyArgs = hsv
	return this.put(url, bodyArgs)
}
