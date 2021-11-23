import isIp from "is-ip"
import * as job from "./job"
import * as printer from "./printer"
import * as system from "./system"
import * as materials from "./materials"
import * as networks from "./network"

export * as UltimakerPrinterEndpoint from "./printer"
export * as UltimakerJobEndpoint from "./job"
export * as UltimakerSystemEndpoint from "./system"
export * as UltimakerMaterialsEndpoint from "./materials"
export * as UltimakerNetworksEndpoint from "./network"

export { UltimakerLEDColors } from "./printer"
export { UltimakerJobTargetState } from "./job"
export { UltimakerSystemUpdateType } from "./system"

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

	/** Checks if the IP address is a valid format before creating an instance of the client. */
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

	public getSystemUpTime() {
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
	// Materials
	// ###

	public getMaterials() {
		return materials.getMaterials(this.baseURL)
	}

	public getMaterial(materialGUID: string) {
		return materials.getMaterial(this.baseURL, materialGUID)
	}

	public deleteMaterial(materialGUID: string) {
		return materials.deleteMaterial(this.baseURL, materialGUID)
	}

	public putMaterial(materialGUID: string) {
		return materials.putMaterial(this.baseURL, materialGUID)
	}

	// ###
	// Networks
	// ###

	public getNetwork() {
		return networks.getNetwork(this.baseURL)
	}

	public getWifiNetworks() {
		return networks.getWifiNetworks(this.baseURL)
	}

	public deleteWifiNetwork(ssid: string) {
		return networks.deleteWifiNetwork(this.baseURL, ssid)
	}

	public putWifiNetwork(ssid: string, passphrase: string) {
		return networks.putWifiNetwork(this.baseURL, ssid, passphrase)
	}

	// ###
	// Printer
	// ###

	public getPrinterStatus() {
		return printer.getPrinterStatus(this.baseURL)
	}

	public postPrinterBlink(frequency: number, count: number) {
		return printer.postPrinterBlink(this.baseURL, frequency, count)
	}

	public putPrinterLED(color: {
		hue: number
		saturation: number
		brightness: number
	}) {
		return printer.putPrinterLED(this.baseURL, color)
	}

	// ###
	// Job
	// ###

	public postJob(jobname: string, gcode: string) {
		return job.postJob(this.baseURL, jobname, gcode)
	}

	public putJob(target: job.UltimakerJobTargetState) {
		return job.putJob(this.baseURL, target)
	}

	public getJob() {
		return job.getJob(this.baseURL)
	}

	public getJobProgress() {
		return job.getJobProgress(this.baseURL)
	}

	public getJobTimeTotal() {
		return job.getJobTimeTotal(this.baseURL)
	}

	public getJobTimeElapsed() {
		return job.getJobTimeElapsed(this.baseURL)
	}

}
