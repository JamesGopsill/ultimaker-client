import * as fs from "fs"
import { UltimakerClient, UltimakerJobTargetState } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

// TODO: create all the test when connected to a printer.

test("POST job", async () => {
	const gcode = fs.readFileSync(__dirname + "/UM3E_20mm_cube.gcode").toString()
	try {
		const res = await client.postJob("testing", gcode)
		expect(typeof res).toBe("object")
	} catch (res) {
		console.log(res)
	}
	await wait(2000)
})

test("GET job progress", async () => {
	const progress = await client.getJobProgress()
	expect(typeof progress).toBe("number")
	await wait(500)
})

test("GET time total", async () => {
	const total = await client.getJobTimeTotal()
	expect(typeof total).toBe("number")
	await wait(500)
})

test("GET time elapsed", async () => {
	const total = await client.getJobTimeElapsed()
	expect(typeof total).toBe("number")
	await wait(500)
})

test("GET job", async () => {
	const job = await client.getJob()
	console.log(job)
	expect(typeof job).toBe("object")
	await wait(500)
})

test("PUT job - stop", async () => {
	const success = await client.putJob(UltimakerJobTargetState.ABORT)
	expect(success).toBe(true)
})
