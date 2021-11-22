import isIp from "is-ip"
import { postJob, putJob, UltimakerJobTargetState, getJob, getJobProgress, getJobTimeTotal, getJobTimeElapsed } from "./job"
import { getPrinterStatus, postPrinterBlink, putPrinterLED } from "./printer"
import { getSystemName, getSystemGUID } from "./system"

export * from "./printer"
export * from "./job"
export * from "./system"

/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
export class UltimakerClient {
	/** The ip address of Ultimaker printer */
	public readonly ip: string
	public readonly baseURL: string

	/** Checks if the IP address is a valid format before creating an instance of the client.  */
	constructor(ip: string) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}

		// TODO: Check if we can get a response from the Ultimaker.

		this.ip = ip
		this.baseURL = "http://" + this.ip
	}

	// Methods

	public getSystemName() {
		return getSystemName(this.baseURL)
	}

	public getPrinterStatus() {
		return getPrinterStatus(this.baseURL)
	}

	public postPrinterBlink(frequency: number, count: number) {
		return postPrinterBlink(this.baseURL, frequency, count)
	}

	public postJob(jobname: string, gcode: string) {
		return postJob(this.baseURL, jobname, gcode)
	}

	public putPrinterLED(color: {
		hue: number
		saturation: number
		brightness: number
	}) {
		return putPrinterLED(this.baseURL, color)
	}

	public putJob(target: UltimakerJobTargetState) {
		return putJob(this.baseURL, target)
	}


	public getJob() {
		return getJob(this.baseURL)
	}

	public getSystemGUID() {
		return getSystemGUID(this.baseURL)
	}

	public getJobProgress() {
		return getJobProgress(this.baseURL)
	}

	public getJobTimeTotal() {
		return getJobTimeTotal(this.baseURL)
	}

	public getJobTimeElapsed() {
		return getJobTimeElapsed(this.baseURL)
	}

}
