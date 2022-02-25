import * as it from "./interfaces"

export interface UltimakerClient {
	// get requests
	getAirManager: () => Promise<
		it.AirManagerDetailsResponse | it.AirManagerNotAvailableResponse
	>
	getEventHistory: () => Promise<it.UltimakerEvent[]>
	getJobHistory: () => Promise<it.UltimakerHistoricJob[]>
	/**
	 * Print job object.
	 */
	getJob: () => Promise<it.UltimakerJobDetails>
	/**
	 * Unique identifier of this print job. In a UUID4 format.
	 */
	getJobUUID: () => Promise<string>
	/**
	 * Get the (estimated) total time in seconds for this print, excluding pauses etc.
	 */
	getJobTimeTotal: () => Promise<number>
	/**
	 * Get the time elapsed (in seconds) since starting this print, including pauses etc.
	 */
	getJobTimeElapsed: () => Promise<number>
	/**
	 * Get the print job state.
	 */
	getJobState: () => Promise<it.UltimakerJobTargetState>
	/**
	 * From what source was the print job started. USB means it's started manually from the USB drive. WEB_API means it's being received by the WEB API. CALIBRATION_MENU means it's printing the XY offset print.
	 */
	getJobSource: () => Promise<it.UltimakerJobSource>
	/**
	 * If the origin equals to WEB_API, then this will return the user who initiated the job.
	 */
	getJobSourceUser: () => Promise<string>
	/**
	 * If the origin equals to WEB_API, then this will return the application that sent the job.
	 */
	getJobSourceApplication: () => Promise<string>
	/**
	 * The result of the current print job.
	 */
	getJobResult: () => Promise<string>
	/**
	 * Unique identifier of this print job. In a UUID4 format.
	 */
	getJobReprintOriginalUUID: () => Promise<string>
	/**
	 * Get the (estimated) progress for the current print job, a value between 0 and 1.
	 */
	getJobProgress: () => Promise<number>
	/**
	 * If the printer is paused this exposes what initiated the pause.
	 */
	getJobPauseSource: () => Promise<string>
	/**
	 * Name of print job.
	 */
	getJobName: () => Promise<string>
	/**
	 * The moment the current print job was started
	 */
	getJobDateTimeStarted: () => Promise<string>
	/**
	 * The moment the last print job finished.
	 */
	getJobDateTimeFinished: () => Promise<string>
	/**
	 * The moment the last print job was cleaned from the build plate.
	 */
	getJobDateTimeCleaned: () => Promise<string>
	/**
	 * All known material XML files, one string for each material.
	 */
	getMaterials: () => Promise<string[]>
	/**
	 * Returns printer object.
	 */
	getPrinter: () => Promise<it.Printer>
	/**
	 * Get the status of the printer.
	 */
	getPrinterStatus: () => Promise<string>
	/**
	 * Returns the hue, saturation, and value (HSV) of the case lighting.
	 */
	getPrinterLED: () => Promise<it.HSV>
	/**
	 * Returns the hue of the case lighting.
	 */
	getPrinterLEDHue: () => Promise<number>
	/**
	 * Returns the saturation of the case lighting.
	 */
	getPrinterLEDSaturation: () => Promise<number>
	/**
	 * Returns the brightness of the case lighting.
	 */
	getPrinterLEDBrightness: () => Promise<number>
	/**
	 * Returns all heads of the printer.
	 */
	getPrinterHeads: () => Promise<it.PrinterHead[]>
	/**
	 * Returns bed object
	 */
	getPrinterBed: () => Promise<it.PrinterBed>
	/**
	 * Returns temperature of bed.
	 */
	getPrinterBedTemperature: () => Promise<it.PrinterBedTemperature>
	/**
	 * Returns status of pre-heating the heated bed.
	 */
	getPrinterBedPreHeat: () => Promise<number>
	/**
	 * Returns the type of the bed.
	 */
	getPrinterBedType: () => Promise<string>
	/**
	 * Get the entire system object.
	 */
	getSystem: () => Promise<it.System>
	/**
	 * A string identifying the underlying platform in human readable form.
	 */
	getSystemPlatform: () => Promise<string>
	/**
	 * The hostname of this machine.
	 */
	getSystemHostname: () => Promise<string>
	/**
	 * The version of the firmware currently running.
	 */
	getSystemFirmware: () => Promise<string>
	/**
	 * Get the status of the firmware update.
	 */
	getSystemFirmwareStatus: () => Promise<string>
	/**
	 * Get the version available for updating to of the 'stable' release path.
	 */
	getSystemFirmwareStable: () => Promise<string>
	/**
	 * Get the version available for updating to of the 'testing' release path.
	 */
	getSystemFirmwareTesting: () => Promise<string>
	/**
	 * The current memory usage.
	 */
	getSystemMemory: () => Promise<it.SystemMemory>
	/**
	 * The current UTC time.
	 */
	getSystemTime: () => Promise<{
		utc: number
	}>
	// TODO system log (query params)
	/**
	 * Get the name of the system.
	 */
	getSystemName: () => Promise<string>
	/**
	 * Get the country of the system.
	 */
	getSystemCountry: () => Promise<string>
	/**
	 * Get the language of the system.
	 */
	getSystemLanguage: () => Promise<string>
	/**
	 * Get the uptime of the system in seconds
	 */
	getSystemUpTime: () => Promise<string>
	/**
	 * Get the type of machine that we are talking with. Always returns "3D printer"
	 */
	getSystemType: () => Promise<string>
	/**
	 * Gets the machines variant. Currently this can return "Ultimaker 3", "Ultimaker 3 extended" or "Ultimaker S5".
	 */
	getSystemVariant: () => Promise<string>
	/**
	 * Gets the hardware number and revision identifiers.
	 */
	getSystemHardware: () => Promise<{
		typeid: number
		revision: number
	}>
	/**
	 * The same machine could have different hardware revisions. When hardware is updated and software needs to know that hardware has changed, this revision number is changed. Currently only revision 0 is known.
	 */
	getSystemHardwareRevision: () => Promise<number>
	/**
	 * Gets the machine type as number identifier. This identifier IDs a specific form of hardware.
	 */
	getSystemHardwareTypeId: () => Promise<number>
	/**
	 * Every machine as a unique identifier stored inside the board. This allows for unique identification of this machine. This identifier is a UUID4.
	 */
	getSystemGUID: () => Promise<string>

	// get object methods
	getSingleJobHistory: (id: string) => Promise<it.UltimakerHistoricJob>
	getMaterial: (id: string) => Promise<string>
	getPrinterHead: (id: string) => Promise<string>

	// put requests
	/**
	 * Change the state of the current job. Options: "print", "pause" or "abort".
	 */
	putJobState: (target: it.UltimakerJobTargetState) => Promise<any>
	/**
	 * Sets the hue, saturation, and value (HSV) of the case lighting
	 */
	putLED: (hsv: it.HSV) => Promise<any>

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
