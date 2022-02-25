import { fetch } from "cross-fetch"
import isIp from "is-ip"
// adding the types to the programmatically added functions
// interface put in a separate file to simplify content
// This joins with the class to provide all the types.
import { UltimakerClient as UC } from "./client-interface"
import { getMethods, getObjectMethods } from "./methods"
import * as post from "./post"
import * as put from "./put"
import { ResponseError } from "./response-error"

export * from "./interfaces"
export { UltimakerLEDColors } from "./led-colors"
export { ResponseError } from "./response-error"

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

		// add the put requests
		for (const key of Object.keys(put)) {
			//@ts-ignore
			this[key] = put[key]
		}

		// add the post requests
		for (const key of Object.keys(post)) {
			//@ts-ignore
			this[key] = post[key]
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

	protected async put(url: string, bodyArgs?: {}) {
		return fetch(url, {
			method: "PUT",
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

export interface UltimakerClient extends UC {}
