import { beforeAll } from "bun:test"
import { UltimakerClient } from "../src/index.ts"

export let client: UltimakerClient

beforeAll(async () => {
	const url = process.env.ULTIMAKER_URL

	if (!url) {
		console.log("No ULTIMAKER_URL env var found")
		process.exit()
	}

	client = new UltimakerClient({
		url,
	})

	{
		console.log("Requesting Authorisation")
		const r = await client.api.v1.auth.request.post("UltimakerClient", "Test")
		if (!r.ok) {
			console.log(r)
			process.exit()
		}
	}

	let verified = false
	while (!verified) {
		await Bun.sleep(1000)
		const r = await client.api.v1.auth.check.get()
		if (r.ok) {
			if (r.data.message == "authorized") {
				verified = true
			}
		}
	}

	{
		const r = await client.api.v1.auth.verify.get()
		console.log(r)
		if (!r.ok) {
			console.log("Error verifying user")
			process.exit()
		}
	}
})
