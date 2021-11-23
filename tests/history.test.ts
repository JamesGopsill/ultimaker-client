import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

test("GET job history", async () => {
	const jobHistory = await client.getJobHistory()
	// console.log(systemInformation)
	expect(typeof jobHistory).toBe("object")
})

test("GET job a single job history", async () => {
	const jobHistory = await client.getJobHistory()
	const singleJobHistory = await client.getSingleJobHistory(jobHistory[0].uuid)
	expect(typeof singleJobHistory).toBe("object")
})

test("GET event history", async () => {
	const eventHistory = await client.getEventHistory()
	// console.log(systemInformation)
	expect(typeof eventHistory).toBe("object")
})

// TODO: put history attempt
