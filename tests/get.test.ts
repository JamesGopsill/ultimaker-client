import { ResponseError, UltimakerClient, UltimakerObject } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

test("Get AirManager", async () => {
	try {
		const res = await client.get(UltimakerObject.AIRMANAGER, undefined, {})
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("Get Event History", async () => {
	try {
		const res = await client.get(UltimakerObject.EVENT_HISTORY, undefined, {})
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("Get Job History", async () => {
	try {
		const res = await client.get(UltimakerObject.JOB_HISTORY, undefined, {})
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})

test("Get Job", async () => {
	try {
		const res = await client.get(UltimakerObject.HISTORIC_JOB, "a-string", {})
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
