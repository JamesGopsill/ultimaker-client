import isIp from "is-ip"
import { postJob } from "./job"
import { getPrinterStatus, postBlink, putLEDColor } from "./printer"
import { getName } from "./system"

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

		// TODO: Ping the IP and see if we get a response from the Ultimaker.

		this.ip = ip
		this.baseURL = "http://" + this.ip
	}

	// Methods

	/**
	 * Retrieves the name of the Ultimaker Printer.
	 *
	 * @returns The name of the printer or rejects with an error containing the http response for further analysis.
	 */
	public getName() {
		return getName(this.baseURL)
	}

	/**
	 * Retrieves the status of the printer.
	 *
	 * @returns Returns the status of the printer or rejects with an error containing the http response for further analysis.
	 */
	public getPrinterStatus() {
		return getPrinterStatus(this.baseURL)
	}

	/**
	 * Blinks the Ultimaker LEDs.
	 *
	 * @param frequency The frequency of the blink.
	 * @param count The number of times the LEDs will blink.
	 * @returns
 	 */
	public postBlink(frequency: number, count: number) {
		return postBlink(this.baseURL, frequency, count)
	}

	/**
	 * Submit a job to the printer.
	 *
	 * @param jobname Provide a name for the job.
	 * @param gcode Provide the gcode.
	 * @returns
	 */
	public postJob(jobname: string, gcode: string) {
		return postJob(this.baseURL, jobname, gcode)
	}

	/**
	 * Set the LED color of the printer
	 *
	 * @param color The color you wish to set the Ultimaker to (in HSV).
	 * @returns
	 */
	public putLEDColor(color: {
		hue: number
		saturation: number
		brightness: number
	}) {
		return putLEDColor(this.baseURL, color)
	}

}
