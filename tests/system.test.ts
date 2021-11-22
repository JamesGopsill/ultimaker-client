import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

// TODO: create all the test when connected to a printer

test("Get System Name", async () => {
	const name = await client.getSystemName()
	expect(typeof name).toBe("string")
})

test("Get System GUID", async () => {
	const guid = await client.getSystemGUID()
	expect(typeof guid).toBe("string")
})
