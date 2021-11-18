import isIp from "is-ip"
import { postJob } from "./job"
import { getStatus, postBlink, putLEDColor } from "./printer"
import { getName } from "./system"

export { UltimakerLEDColors } from "./printer"

/**
 * Create the client to interface with the Ultimaker API.
 *
 * @param ip The IP address for the printer on your local network.
 * @returns An instance of UltimakerClient
 */
export class UltimakerClient {
	/** The ip address of Ultimaker printer */
	readonly ip: string
	readonly endpoint: string

	/** Checks if the IP address is a valid format before creating an instance of the client.  */
	constructor(ip: string) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}

		// TODO: Ping the IP and see if we get a response from the Ultimaker.

		this.ip = ip
		this.endpoint = "http://" + this.ip
	}

	public postBlink = postBlink
	public postJob = postJob

	public getName = getName
	public getStatus = getStatus

	public putLEDColor = putLEDColor
}
