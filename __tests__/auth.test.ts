import { expect, test } from "bun:test"
import { digestHeader } from "../src/df.js"
import { UltimakerClient } from "../src/index.js"
import { client } from "./setup.js"

test("Client Created", () => {
	expect(client).toBeInstanceOf(UltimakerClient)
})

test("Digest Header", () => {
	const header = digestHeader({
		username: "135df79fe082a42aca65d9aa01eaf1a3",
		password:
			"bd858c7f8c16165d3b9f3e2f58abfe1cb3ee368cde79a4d5a8a64530c3fd4293",
		realm: "Jedi-API",
		nonce: "3d8f02960a44a97341fb73687f426058",
		cnonce: "c47d2e8313222e8b",
		nc: 2,
		uri: "/api/v1/auth/verify",
		qop: "auth",
		method: "GET",
	})
	const test =
		'Digest username="135df79fe082a42aca65d9aa01eaf1a3", realm="Jedi-API", nonce="3d8f02960a44a97341fb73687f426058", uri="/api/v1/auth/verify", response="f9216094a8032725d875b56859e5ef36", qop=auth, nc=00000002, cnonce="c47d2e8313222e8b"'
	expect(header).toEqual(test)
})
