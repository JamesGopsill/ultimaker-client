import type { HSV, UltimakerClient, UltimakerJobTargetState } from "./index.js"

export const putJobState = async function (
	this: UltimakerClient,
	target: UltimakerJobTargetState
) {
	const url = `${this.baseUrl}/api/v1/print_job/state`
	const bodyArgs = {
		target,
	}
	return this.put(url, bodyArgs)
}

export const putLED = async function (this: UltimakerClient, hsv: HSV) {
	const url = `${this.baseUrl}/api/v1/printer/led`
	const bodyArgs = hsv
	return this.put(url, bodyArgs)
}
