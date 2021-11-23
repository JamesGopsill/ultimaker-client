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
	await wait(2000)
	try {
		const res = await client.postJob("testing", gcode)
		expect(typeof res).toBe("object")
	} catch (res) {
		console.log(res)
	}
})

test("GET job datetime cleaned", async () => {
	const v = await client.getJobDateTimeCleaned()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job datetime finished", async () => {
	const v = await client.getJobDateTimeFinished()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job datetime started", async () => {
	const v = await client.getJobDateTimeStarted()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job name", async () => {
	const v = await client.getJobName()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job progress", async () => {
	const v = await client.getJobProgress()
	await wait(500)
	expect(typeof v).toBe("number")
})

test("GET job reprint original uuid", async () => {
	const v = await client.getJobReprintOriginalUUID()
	await wait(500)
	expect(typeof v).toBe("number")
})

test("GET job result", async () => {
	const v = await client.getJobResult()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job source application", async () => {
	const v = await client.getJobSourceApplication()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job source user", async () => {
	const v = await client.getJobSourceUser()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job source", async () => {
	const v = await client.getJobSource()
	await wait(500)
	expect(typeof v).toBe("object")
})

test("GET job state", async () => {
	const v = await client.getJobState()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET time elapsed", async () => {
	const v = await client.getJobTimeElapsed()
	await wait(500)
	expect(typeof v).toBe("number")
})

test("GET time total", async () => {
	const v = await client.getJobTimeTotal()
	await wait(500)
	expect(typeof v).toBe("number")
})

test("GET job uuid", async () => {
	const v = await client.getJobUUID()
	await wait(500)
	expect(typeof v).toBe("string")
})

test("GET job", async () => {
	const job = await client.getJob()
	await wait(250)
	expect(typeof job).toBe("object")
})

test("PUT job - stop", async () => {
	const success = await client.putJob(UltimakerJobTargetState.ABORT)
	expect(success).toBe(true)
})
