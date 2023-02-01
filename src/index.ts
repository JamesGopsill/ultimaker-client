import { getMethods } from "./get-methods.js"
import { getObjectMethods } from "./get-object-methods.js"
import type * as Def from "./definitions.js"
import { get } from "./get-fcn"
import { put } from "./put-fcn.js"
import * as putMethods from "./put-methods"
import * as postMethods from "./post-methods"

export class UltimakerClient {
	public readonly baseUrl: string

	constructor(url: string) {
		this.baseUrl = url

		// Create the get methods
		for (const method of getMethods) {
			//@ts-expect-error
			this[method.name] = this.get(`${this.baseUrl}/${method.endpoint}`)
		}

		for (const method of getObjectMethods) {
			//@ts-expect-error
			this[method.name] = (id: string) => {
				const url = `${this.baseUrl}/${method.endpoint}/${id}`
				return this.get(url)
			}
		}

		for (const key of Object.keys(putMethods)) {
			//@ts-expect-error
			this[key] = put[key]
		}

		// add the post requests
		for (const key of Object.keys(postMethods)) {
			//@ts-ignore
			this[key] = post[key]
		}
	}

	protected get = get
	protected put = put
}

export interface UltimakerClient {
	// get requests
	getAirManager: () => Promise<
		Def.HttpResponse<
			Def.AirManagerDetailsResponse | Def.AirManagerNotAvailableResponse
		>
	>
	getEventHistory: () => Promise<Def.HttpResponse<Def.UltimakerEvent[]>>
	getJobHistory: () => Promise<Def.HttpResponse<Def.UltimakerHistoricJob[]>>
	/**
	 * Print job object.
	 */
	getJob: () => Promise<Def.HttpResponse<Def.UltimakerJobDetails>>
	/**
	 * Unique identifier of this print job. In a UUID4 format.
	 */
	getJobUUID: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the (estimated) total time in seconds for this print, excluding pauses etc.
	 */
	getJobTimeTotal: () => Promise<Def.HttpResponse<number>>
	/**
	 * Get the time elapsed (in seconds) since starting this print, including pauses etc.
	 */
	getJobTimeElapsed: () => Promise<Def.HttpResponse<number>>
	/**
	 * Get the print job state.
	 */
	getJobState: () => Promise<Def.HttpResponse<Def.UltimakerJobTargetState>>
	/**
	 * From what source was the print job started. USB means it's started manually from the USB drive. WEB_API means it's being received by the WEB API. CALIBRATION_MENU means it's printing the XY offset print.
	 */
	getJobSource: () => Promise<Def.HttpResponse<Def.UltimakerJobSource>>
	/**
	 * If the origin equals to WEB_API, then this will return the user who initiated the job.
	 */
	getJobSourceUser: () => Promise<Def.HttpResponse<string>>
	/**
	 * If the origin equals to WEB_API, then this will return the application that sent the job.
	 */
	getJobSourceApplication: () => Promise<Def.HttpResponse<string>>
	/**
	 * The result of the current print job.
	 */
	getJobResult: () => Promise<Def.HttpResponse<string>>
	/**
	 * Unique identifier of this print job. In a UUID4 format.
	 */
	getJobReprintOriginalUUID: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the (estimated) progress for the current print job, a value between 0 and 1.
	 */
	getJobProgress: () => Promise<Def.HttpResponse<number>>
	/**
	 * If the printer is paused this exposes what initiated the pause.
	 */
	getJobPauseSource: () => Promise<Def.HttpResponse<string>>
	/**
	 * Name of print job.
	 */
	getJobName: () => Promise<Def.HttpResponse<string>>
	/**
	 * The moment the current print job was started
	 */
	getJobDateTimeStarted: () => Promise<Def.HttpResponse<string>>
	/**
	 * The moment the last print job finished.
	 */
	getJobDateTimeFinished: () => Promise<Def.HttpResponse<string>>
	/**
	 * The moment the last print job was cleaned from the build plate.
	 */
	getJobDateTimeCleaned: () => Promise<Def.HttpResponse<string>>
	/**
	 * All known material XML files, one string for each material.
	 */
	getMaterials: () => Promise<Def.HttpResponse<string[]>>
	/**
	 * Returns printer object.
	 */
	getPrinter: () => Promise<Def.HttpResponse<Def.Printer>>
	/**
	 * Get the status of the printer.
	 */
	getPrinterStatus: () => Promise<Def.HttpResponse<string>>
	/**
	 * Returns the hue, saturation, and value (HSV) of the case lighting.
	 */
	getPrinterLED: () => Promise<Def.HttpResponse<Def.HSV>>
	/**
	 * Returns the hue of the case lighting.
	 */
	getPrinterLEDHue: () => Promise<Def.HttpResponse<number>>
	/**
	 * Returns the saturation of the case lighting.
	 */
	getPrinterLEDSaturation: () => Promise<Def.HttpResponse<number>>
	/**
	 * Returns the brightness of the case lighting.
	 */
	getPrinterLEDBrightness: () => Promise<Def.HttpResponse<number>>
	/**
	 * Returns all heads of the printer.
	 */
	getPrinterHeads: () => Promise<Def.HttpResponse<Def.PrinterHead[]>>
	/**
	 * Returns bed object
	 */
	getPrinterBed: () => Promise<Def.HttpResponse<Def.PrinterBed>>
	/**
	 * Returns temperature of bed.
	 */
	getPrinterBedTemperature: () => Promise<
		Def.HttpResponse<Def.PrinterBedTemperature>
	>
	/**
	 * Returns status of pre-heating the heated bed.
	 */
	getPrinterBedPreHeat: () => Promise<Def.HttpResponse<number>>
	/**
	 * Returns the type of the bed.
	 */
	getPrinterBedType: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the entire system object.
	 */
	getSystem: () => Promise<Def.HttpResponse<Def.System>>
	/**
	 * A string identifying the underlying platform in human readable form.
	 */
	getSystemPlatform: () => Promise<Def.HttpResponse<string>>
	/**
	 * The hostname of this machine.
	 */
	getSystemHostname: () => Promise<Def.HttpResponse<string>>
	/**
	 * The version of the firmware currently running.
	 */
	getSystemFirmware: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the status of the firmware update.
	 */
	getSystemFirmwareStatus: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the version available for updating to of the 'stable' release path.
	 */
	getSystemFirmwareStable: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the version available for updating to of the 'testing' release path.
	 */
	getSystemFirmwareTesting: () => Promise<Def.HttpResponse<string>>
	/**
	 * The current memory usage.
	 */
	getSystemMemory: () => Promise<Def.HttpResponse<Def.SystemMemory>>
	/**
	 * The current UTC time.
	 */
	getSystemTime: () => Promise<
		Def.HttpResponse<{
			utc: number
		}>
	>
	// TODO system log (query params)
	/**
	 * Get the name of the system.
	 */
	getSystemName: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the country of the system.
	 */
	getSystemCountry: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the language of the system.
	 */
	getSystemLanguage: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the uptime of the system in seconds
	 */
	getSystemUpTime: () => Promise<Def.HttpResponse<string>>
	/**
	 * Get the type of machine that we are talking with. Always returns "3D printer"
	 */
	getSystemType: () => Promise<Def.HttpResponse<string>>
	/**
	 * Gets the machines variant. Currently this can return "Ultimaker 3", "Ultimaker 3 extended" or "Ultimaker S5".
	 */
	getSystemVariant: () => Promise<Def.HttpResponse<string>>
	/**
	 * Gets the hardware number and revision identifiers.
	 */
	getSystemHardware: () => Promise<
		Def.HttpResponse<{
			typeid: number
			revision: number
		}>
	>
	/**
	 * The same machine could have different hardware revisions. When hardware is updated and software needs to know that hardware has changed, this revision number is changed. Currently only revision 0 is known.
	 */
	getSystemHardwareRevision: () => Promise<Def.HttpResponse<number>>
	/**
	 * Gets the machine type as number identifier. This identifier IDs a specific form of hardware.
	 */
	getSystemHardwareTypeId: () => Promise<Def.HttpResponse<number>>
	/**
	 * Every machine as a unique identifier stored inside the board. This allows for unique identification of this machine. This identifier is a UUID4.
	 */
	getSystemGUID: () => Promise<Def.HttpResponse<string>>

	// get object methods
	getSingleJobHistory: (
		id: string
	) => Promise<Def.HttpResponse<Def.UltimakerHistoricJob>>
	getMaterial: (id: string) => Promise<Def.HttpResponse<string>>
	getPrinterHead: (id: string) => Promise<Def.HttpResponse<string>>

	// put requests
	/**
	 * Change the state of the current job. Options: "print", "pause" or "abort".
	 */
	putJobState: (
		target: Def.UltimakerJobTargetState
	) => Promise<Def.HttpResponse<any>>
	/**
	 * Sets the hue, saturation, and value (HSV) of the case lighting
	 */
	putLED: (hsv: Def.HSV) => Promise<Def.HttpResponse<any>>

	// post requests
	/**
	 * Submit a job to the printer.
	 */
	postJob: (
		jobname: string,
		gcode: string
	) => Promise<{
		message: string
		uuid: string
	}>
}
