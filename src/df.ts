import { UltimakerClient } from "./index.js"
import { md5 } from "./md5.js"
import { HttpResponse } from "./types.js"

export async function df<T = any>(
	this: UltimakerClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD",
	uri: string,
	content?: Object | FormData | string,
) {
	const url = `${this.baseUrl}${uri}`
	const mode = "cors"
	let digest: string | null = null
	let realm: string | undefined = undefined
	let nonce: string | undefined = undefined
	let qop: string | undefined = undefined

	{
		const req = new Request(url, {
			method,
			mode,
		})
		const res = await fetch(req)
		digest = res.headers.get("WWW-Authenticate")
		if (digest == null) {
			console.log("Warning: Expected Digest")
			return res
		}
		const m = digest.match(/"[\w\s-]+"/g)
		if (m == null) {
			console.log("Warning: No Matches")
			return res
		}
		realm = m[0]
		nonce = m[1]
		qop = m[2]
		if (!(realm && nonce && qop)) {
			console.log("Could not match realm, nonce and auth")
			return res
		}
		realm.replace('"', "")
		nonce.replace('"', "")
		qop.replace('"', "")
	}

	const HA1 = md5(`${this.username}:${realm}:${this.password}`)
	const HA2 = md5(`${method}:${uri}`)
	this.nc += 1
	let nc = `${this.nc}`
	nc = nc.padStart(8 - nc.length, "0")
	const authorization = md5(
		`${HA1}:${nonce}:${nc}:${this.cnonce}:${qop}:${HA2}`,
	)

	const headers = new Headers()
	headers.set("Accept", "application/json")
	headers.set("Authorization", authorization)
	let body = ""
	switch (true) {
		case content instanceof String:
			headers.set("Content-Type", "plain/text")
			break
		case content instanceof FormData:
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
