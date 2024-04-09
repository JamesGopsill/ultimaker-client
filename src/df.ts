import { UltimakerClient } from "./index.js"
import { md5 } from "./md5.js"
import { HttpResponse } from "./types.js"

export const digestHeader = (p: {
	username: string
	realm: string
	password: string
	method: string
	uri: string
	nc: number
	nonce: string
	cnonce: string
	qop: string
}) => {
	const HA1 = md5(`${p.username}:${p.realm}:${p.password}`)
	const HA2 = md5(`${p.method}:${p.uri}`)
	let paddedNc = `${p.nc}`
	paddedNc = paddedNc.padStart(9 - paddedNc.length, "0")
	const response = md5(
		`${HA1}:${p.nonce}:${paddedNc}:${p.cnonce}:${p.qop}:${HA2}`,
	)

	return `Digest username="${p.username}", realm="${p.realm}", nonce="${p.nonce}", uri="${p.uri}", response="${response}", qop=${p.qop}, nc=${paddedNc}, cnonce="${p.cnonce}"`
}

export async function df<T = any>(
	this: UltimakerClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD",
	uri: string,
	content?: Object | FormData | string,
): Promise<HttpResponse<T>> {
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
		try {
			const res = await fetch(req)
			digest = res.headers.get("WWW-Authenticate")
			if (digest == null) {
				console.log("Warning: Expected Digest")
				return res as HttpResponse<T>
			}
			const m = digest.match(/"[\w\s-]+"/g)
			if (m == null) {
				console.log("Warning: No Matches")
				return res as HttpResponse<T>
			}
			realm = m[0]
			nonce = m[1]
			qop = m[2]
			if (!(realm && nonce && qop)) {
				console.log("Could not match realm, nonce and auth")
				return res as HttpResponse<T>
			}
			realm = realm.replaceAll('"', "")
			nonce = nonce.replaceAll('"', "")
			qop = qop.replaceAll('"', "")
		} catch {
			return new Response(undefined, { status: 503 }) as HttpResponse<T>
		}
	}

	const authorization = digestHeader({
		username: this.username,
		realm,
		password: this.password,
		method,
		uri,
		nc: this.nc,
		nonce,
		cnonce: this.cnonce,
		qop,
	})

	const headers = new Headers()
	headers.set("Accept", "application/json")
	headers.set("Authorization", authorization)
	let body: string | FormData = ""
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
	try {
		const res = (await fetch(req)) as HttpResponse<T>
		if (res.ok) {
			if (res.headers.get("Content-Type")?.includes("application/json")) {
				res.data = await res.json()
			}
		}
		return res
	} catch {
		return new Response(undefined, { status: 503 }) as HttpResponse<T>
	}
}
