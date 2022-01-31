import { fetch } from "cross-fetch"
import isIp from "is-ip"
import * as it from "./interfaces"
import { getMethods, getObjectMethods } from "./methods"
import * as put from "./put"
import { ResponseError } from "./response-error"

export * from "./interfaces"

export class UltimakerClient {
	public readonly ip: string
	public readonly baseUrl: string

	/** Checks if the IP address is a valid format before creating an instance of the client. */
	constructor(ip: string) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}
		this.ip = ip
		this.baseUrl = "http://" + this.ip

		// Create the get methods
		for (const method of getMethods) {
			//@ts-ignore
			this[method.name] = () => {
				return this.get(`${this.baseUrl}/${method.endpoint}`)
			}
		}

		for (const method of getObjectMethods) {
			//@ts-ignore
			this[method.name] = (id: string) => {
				const url = `${this.baseUrl}/${method.endpoint}/${id}`
				return this.get(url)
			}
		}

		// Run through all the put requests and add them to the Ultimaker Client
		for (const key of Object.keys(put)) {
			//@ts-ignore
			this[key] = put[key]
		}
	}

	protected async get(url: string, bodyArgs?: {}) {
		return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(bodyArgs),
		}).then(async (r) => {
			if (r.ok) {
				const json = await r.json()
				return json
			}
			throw new ResponseError(r)
		})
	}

	// TODO: recursive check for dates analysis
}

export interface UltimakerClient {
	// get requests
	getAirManager: () => Promise<
		it.AirManagerDetailsResponse | it.AirManagerNotAvailableResponse
	>
	getEventHistory: () => Promise<it.UltimakerEvent[]>
	getJobHistory: () => Promise<it.UltimakerHistoricJob[]>
	getJob: () => Promise<it.UltimakerJobDetails>
	getJobUUID: () => Promise<string>
	getJobTimeTotal: () => Promise<number>
	getJobTimeElapsed: () => Promise<number>
	getJobState: () => Promise<it.UltimakerJobTargetState>
	getJobSource: () => Promise<it.UltimakerJobSource>
	getJobSourceUser: () => Promise<string>
	getJobSourceApplication: () => Promise<string>
	getJobResult: () => Promise<string>
	getJobReprintOriginalUUID: () => Promise<string>
	getJobProgress: () => Promise<number>
	getJobPauseSource: () => Promise<string>
	getJobName: () => Promise<string>
	getJobDateTimeStarted: () => Promise<Date>
	getJobDateTimeFinished: () => Promise<Date>
	getJobDateTimeCleaned: () => Promise<Date>
	// get object methods
	getSingleJobHistory: (id: string) => Promise<it.UltimakerHistoricJob>
	// put requests
}
