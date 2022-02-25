import { UltimakerClient } from "."
import * as it from "./interfaces"

export const putJobState = async function (
	this: UltimakerClient,
	target: it.UltimakerJobTargetState
) {
	const url = `${this.baseUrl}/api/v1/print_job/state`
	const bodyArgs = {
		target,
	}
	return this.put(url, bodyArgs)
}

export const putLED = async function (this: UltimakerClient, hsv: it.HSV) {
	const url = `${this.baseUrl}/api/v1/printer/led`
	const bodyArgs = hsv
	return this.put(url, bodyArgs)
}
