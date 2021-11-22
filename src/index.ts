import isIp from "is-ip"
import { postJob, putJob, UltimakerJobTargetState, getJob, getJobProgress, getJobTimeTotal, getJobTimeElapsed } from "./job"
import { getPrinterStatus, postPrinterBlink, putPrinterLED } from "./printer"
import * as system from "./system"

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

	// ###
	// System endpoint
	// ###
	public getSystem() {
		return system.getSystem(this.baseURL)
	}

	public getSystemName() {
		return system.getSystemName(this.baseURL)
	}

	public putSystemName(name: string) {
		return system.putSystemName(this.baseURL, name)
	}

	public getSystemGUID() {
		return system.getSystemGUID(this.baseURL)
	}

	public getSystemHostname() {
		return system.getSystemHostname(this.baseURL)
	}

	public getSystemPlatform() {
		return system.getSystemPlatform(this.baseURL)
	}

	public getSystemFirmware() {
		return system.getSystemFirmware(this.baseURL)
	}

	public putSystemFirmware(updateType: system.UltimakerSystemUpdateType) {
		return system.putSystemFirmware(this.baseURL, updateType)
	}

	public getSystemFirmwareStatus() {
		return system.getSystemFirmwareStatus(this.baseURL)
	}

	public getSystemFirmwareStable() {
		return system.getSystemFirmwareStable(this.baseURL)
	}

	public getSystemFirmwareTesting() {
		return system.getSystemFirmwareTesting(this.baseURL)
	}

	public getSystemMemory() {
		return system.getSystemMemory(this.baseURL)
	}

	public getSystemTime() {
		return system.getSystemTime(this.baseURL)
	}

	public getSystemLog(boot: number = 0, lines: number = 50) {
		return system.getSystemLog(this.baseURL, boot, lines)
	}

	public getSystemCountry() {
		return system.getSystemCountry(this.baseURL)
	}

	public putSystemCountry(country: string) {
		return system.putSystemCountry(this.baseURL, country)
	}

	public getSystemLanguage() {
		return system.getSystemLanguage(this.baseURL)
	}

	public getSystemUptime() {
		return system.getSystemUpTime(this.baseURL)
	}

	public getSystemType() {
		return system.getSystemType(this.baseURL)
	}

	public getSystemVariant() {
		return system.getSystemVariant(this.baseURL)
	}

	public getSystemHardware() {
		return system.getSystemHardware(this.baseURL)
	}

	public getSystemHardwareTypeId() {
		return system.getSystemHardwareTypeId(this.baseURL)
	}

	public getSystemHardwareRevision() {
		return system.getSystemHardwareRevision(this.baseURL)
	}

	public putSystemDisplayMessage(message: string, buttonCaption: string) {
		return system.putSystemDisplayMessage(this.baseURL, message, buttonCaption)
	}

	// ###

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
