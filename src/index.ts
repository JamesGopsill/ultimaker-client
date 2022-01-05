import { fetch } from "cross-fetch"
import isIp from "is-ip"
import {
	UltimakerObject,
	UltimakerObjectBodyArgs,
	UltimakerObjectIdRequired,
	UltimakerObjectResponse,
} from "./interfaces"

export * from "./interfaces"

export class ResponseError extends Error {
	public response: Response

	constructor(response: Response) {
		super("Check error.response for the response from the server.")
		this.name = "ResponseError"
		this.message = "Check error.response for the response from the server."
		this.response = response
	}
}

export class UltimakerClient {
	public readonly baseUrl: string
	public debug: boolean

	constructor(ip: string, debug: boolean = false) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}

		this.baseUrl = `http://${ip}/api/v1/`
		this.debug = debug
	}

	public async get<T extends UltimakerObject>(
		object: T,
		id: UltimakerObjectIdRequired<T>,
		bodyArgs: UltimakerObjectBodyArgs<T>
	): Promise<UltimakerObjectResponse<T>> {
		// TODO: type check
		let url = object.toString()

		// Should be a string if not undefined
		if (typeof id != "undefined") {
			url = url.replace("{id}", id)
		}

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
				// TODO: Add in the function to check for and return dates
				return json
			}
			throw new ResponseError(r)
		})
	}
}
