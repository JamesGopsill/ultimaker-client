import isIp from "is-ip"
import * as job from "./job"
import * as printer from "./printer"
import * as system from "./system"
import * as materials from "./materials"
import * as networks from "./network"
import * as history from "./history"
import * as airmanager from "./airmanager"

// Export the individual endpoints in case someone wants to use them directly
export * as UltimakerPrinterEndpoint from "./printer"
export * as UltimakerJobEndpoint from "./job"
export * as UltimakerSystemEndpoint from "./system"
export * as UltimakerMaterialsEndpoint from "./materials"
export * as UltimakerNetworksEndpoint from "./network"
export * as UltimakerHistoryEndpoint from "./history"
export * as UltimakerAirManagerEndpoint from "./airmanager"

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

	public getSystemLog() {
		return system.getSystemLog(this.baseURL)
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
	// History
	// ###

	public getJobHistory() {
		return history.getJobHistory(this.baseURL)
	}

	public getSingleJobHistory(uuid: string) {
		return history.getSingleJobHistory(this.baseURL, uuid)
	}

	public getEventHistory() {
		return history.getEventHistory(this.baseURL)
	}

	public putEventHistory(typeID: number, parameters: string[]) {
		return history.putEventHistory(this.baseURL, typeID, parameters)
	}

	// ###
	// Printer
	// ###

	public getPrinter() {
		return printer.getPrinter(this.baseURL)
	}

	public getPrinterStatus() {
		return printer.getPrinterStatus(this.baseURL)
	}

	public getPrinterLED() {
		return printer.getPrinterLED(this.baseURL)
	}

	public getPrinterLEDHue() {
		return printer.getPrinterLEDHue(this.baseURL)
	}

	public getPrinterLEDSaturation() {
		return printer.getPrinterLEDSaturation(this.baseURL)
	}

	public getPrinterLEDBrightness() {
		return printer.getPrinterLEDBrightness(this.baseURL)
	}

	public getPrinterHeads() {
		return printer.getPrinterHeads(this.baseURL)
	}

	public getPrinterHead(headIndex: string) {
		return printer.getPrinterHead(this.baseURL, headIndex)
	}

	public getPrinterPosition(headIndex: string) {
		return printer.getPrinterHeadPosition(this.baseURL, headIndex)
	}

	public getPrinterHeadMaxSpeed(headIndex: string) {
		return printer.getPrinterHeadMaxSpeed(this.baseURL, headIndex)
	}

	public getPrinterHeadAcceleration(headIndex: string) {
		return printer.getPrinterHeadAcceleration(this.baseURL, headIndex)
	}

	public getPrinterHeadJerk(headIndex: string) {
		return printer.getPrinterHeadJerk(this.baseURL, headIndex)
	}

	public getPrinterHeadExtruders(headIndex: string) {
		return printer.getPrinterHeadExtruders(this.baseURL, headIndex)
	}

	public getPrinterHeadExtruder(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruder(this.baseURL, headIndex, extruderIndex)	
	}

	public getPrinterHeadExtruderHotendOffset(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderHotendOffset(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderFeeder(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderFeeder(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderFeederJerk(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderFeederJerk(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderFeederMaxSpeed(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderFeederMaxSpeed(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderFeederAcceleration(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderFeederAcceleration(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderActiveMaterial(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderActiveMaterial(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderActiveMaterialLengthRemaining(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderActiveMaterialLengthRemaining(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderActiveMaterialGUID(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderActiveMaterialGUID(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderHotend(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderHotend(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterHeadExtruderHotendTemperature(headIndex: string, extruderIndex: string) {
		return printer.getPrinterHeadExtruderHotendTemperature(this.baseURL, headIndex, extruderIndex)
	}

	public getPrinterBed() {
		return printer.getPrinterBed(this.baseURL)
	}

	public getPrinterBedTemperature() {
		return printer.getPrinterBedTemperature(this.baseURL)
	}

	public getPrinterBedPreHeat() {
		return printer.getPrinterBedPreHeat(this.baseURL)
	}

	public getPrinterBedType() {
		return printer.getPrinterBedType(this.baseURL)
	}

	public postPrinterBlink(frequency: number, count: number) {
		return printer.postPrinterBlink(this.baseURL, frequency, count)
	}

	/*
	public postPrinterValidateHeader(gcode: string) {
		return printer.postPrinterValidateHeader(this.baseURL, gcode)
	}
	*/

	public putPrinterLED(color: printer.HSV) {
		return printer.putPrinterLED(this.baseURL, color)
	}

	public putPrinterLEDHue(hue: number) {
		return printer.putPrinterLEDHue(this.baseURL, hue)
	}

	public putPrinterLEDSaturation(saturation: number) {
		return printer.putPrinterLEDSaturation(this.baseURL, saturation)
	}

	public putPrinterLEDBrightness(brightness: number) {
		return printer.putPrinterLEDBrightness(this.baseURL, brightness)
	}

	public putPrinterHeadPosition(headIndex: string, x: number, y: number, z: number, speed: number) {
		return printer.putPrinterHeadPosition(this.baseURL, headIndex, x, y, z, speed)
	}

	public putPrinterHeadMaxSpeed(headIndex: string, xyz: printer.Cartesian) {
		return printer.putPrinterHeadMaxSpeed(this.baseURL, headIndex, xyz)
	}

	public putPrinterHeadJerk(headIndex: string, xyz: printer.Cartesian) {
		return printer.putPrinterHeadJerk(this.baseURL, headIndex, xyz)
	}

	public putPrinterBedTemperature(temperature: number) {
		return printer.putPrinterBedTemperature(this.baseURL, temperature)
	}

	public putPrinterBedPreHeat(temperature: number, duration: number) {
		return printer.putPrinterBedPreHeat(this.baseURL, temperature, duration)
	}

	// ###
	// Job
	// ###

	public postJob(jobname: string, gcode: string) {
		return job.postJob(this.baseURL, jobname, gcode)
	}

	public putJob(target: job.UltimakerJobTargetState) {
		return job.putJobState(this.baseURL, target)
	}

	public getJobDateTimeCleaned() {
		return job.getJobDateTimeCleaned(this.baseURL)
	}

	public getJobDateTimeFinished() {
		return job.getJobDateTimeFinished(this.baseURL)
	}

	public getJobDateTimeStarted() {
		return job.getJobDateTimeStarted(this.baseURL)
	}

	public getJobName() {
		return job.getJobName(this.baseURL)
	}

	public getJobPauseSource() {
		return job.getJobPauseSource(this.baseURL)
	}

	public getJobProgress() {
		return job.getJobProgress(this.baseURL)
	}

	public getJobReprintOriginalUUID() {
		return job.getJobReprintOriginalUUID(this.baseURL)
	}

	public getJobResult() {
		return job.getJobResult(this.baseURL)
	}

	public getJobSourceApplication() {
		return job.getJobSourceApplication(this.baseURL)
	}

	public getJobSourceUser() {
		return job.getJobSourceUser(this.baseURL)
	}

	public getJobSource() {
		return job.getJobSource(this.baseURL)
	}

	public getJobState() {
		return job.getJobState(this.baseURL)
	}

	public getJobTimeElapsed() {
		return job.getJobTimeElapsed(this.baseURL)
	}

	public getJobTimeTotal() {
		return job.getJobTimeTotal(this.baseURL)
	}

	public getJobUUID() {
		return job.getJobUUID(this.baseURL)
	}

	public getJob() {
		return job.getJob(this.baseURL)
	}

	// ###
	// AirManager
	// ###

	public getAirManager() {
		return airmanager.getAirManager(this.baseURL)
	}

}
