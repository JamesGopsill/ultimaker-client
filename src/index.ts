import isIp from "is-ip"

export class UltimakerClient {
	public readonly baseUrl: string

	constructor(ip: string) {
		if (!isIp.v4(ip)) {
			throw new TypeError("[UltimakerClient] Invalid IP address")
		}

		this.baseUrl = "http://" + ip
	}
}
