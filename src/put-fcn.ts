import type { HttpResponse, UltimakerClient } from "./index.js"

export async function put(
	this: UltimakerClient,
	url: string,
	bodyArgs: {} = {}
) {
	const controller = new AbortController()
	const signal = controller.signal

	const config: RequestInit = {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(bodyArgs),
		signal,
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<null>
	r.data = null
	controller.abort()
	return r
}
