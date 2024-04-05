import { UltimakerClient } from "./index.js"
import { HttpResponse } from "./types.js"

export async function f<T = any>(
	this: UltimakerClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD",
	uri: string,
	content?: Object | FormData | string,
): Promise<HttpResponse<T>> {
	const url = `${this.baseUrl}${uri}`

	const headers = new Headers()
	let body: string | FormData = ""
	headers.set("Accept", "application/json")
	switch (true) {
		case content instanceof String:
			headers.set("Content-Type", "plain/text")
			break
		case content instanceof FormData:
			body = content
			break
		case content instanceof Object:
			headers.set("Content-Type", "application/json")
			body = JSON.stringify(body)
			break
		default:
			break
	}
	const req = new Request(url, {
		method,
		mode: "cors",
		headers,
		body,
	})
	const res = (await fetch(req)) as HttpResponse<T>
	if (res.ok) {
		if (res.headers.get("Content-Type")?.includes("application/json")) {
			res.data = await res.json()
		}
	}
	return res
}
