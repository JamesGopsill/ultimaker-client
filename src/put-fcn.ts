import type { HttpResponse } from "./definitions.js"
import type { UltimakerClient } from "./index.js"

export async function put<T>(
	this: UltimakerClient,
	url: string,
	bodyArgs?: {}
) {
	if (typeof bodyArgs != "undefined") {
		bodyArgs = {}
	}

	const config: RequestInit = {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(bodyArgs),
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}
