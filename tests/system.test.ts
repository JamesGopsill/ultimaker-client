import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

// TODO: create all the test when connected to a printer

test("GET system information", async () => {
	const systemInformation = await client.getSystem()
	// console.log(systemInformation)
	expect(typeof systemInformation).toBe("object")
})

test("GET system name", async () => {
	const name = await client.getSystemName()
	expect(typeof name).toBe("string")
})

test("GET system GUID", async () => {
	const guid = await client.getSystemGUID()
	expect(typeof guid).toBe("string")
})

test("GET system plaftorm", async () => {
	const v = await client.getSystemPlatform()
	expect(typeof v).toBe("string")
})

test("GET system hostname", async () => {
	const v = await client.getSystemHostname()
	expect(typeof v).toBe("string")
})

test("GET system firmware", async () => {
	const v = await client.getSystemFirmware()
	expect(typeof v).toBe("string")
})

test("GET system firmware status", async () => {
	const v = await client.getSystemFirmwareStatus()
	expect(typeof v).toBe("string")
})

test("GET system firmware stable", async () => {
	const v = await client.getSystemFirmwareStable()
	expect(typeof v).toBe("string")
})

/*
test("GET system firmware testing", async () => {
	const v = await client.getSystemFirmwareTesting()
	expect(typeof v).toBe("string")
})
*/

test("GET system memory", async () => {
	const v = await client.getSystemMemory()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system time", async () => {
	const v = await client.getSystemTime()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system log", async () => {
	const v = await client.getSystemLog(0, 5)
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system country", async () => {
	const v = await client.getSystemCountry()
	expect(typeof v).toBe("string")
})

test("PUT system country", async () => {
	const success = await client.putSystemCountry("UK")
	expect(success).toBe(true)
})

test("GET system language", async () => {
	const v = await client.getSystemLanguage()
	expect(typeof v).toBe("string")
})

test("GET system uptime", async () => {
	const v = await client.getSystemUpTime()
	expect(typeof v).toBe("number")
})

test("GET system variant", async () => {
	const v = await client.getSystemVariant()
	expect(typeof v).toBe("number")
})

test("GET system hardware", async () => {
	const v = await client.getSystemHardware()
	expect(typeof v).toBe("object")
})

test("GET system hardware typeid", async () => {
	const v = await client.getSystemHardwareTypeId()
	expect(typeof v).toBe("number")
})

test("GET system hardware revision", async () => {
	const v = await client.getSystemHardwareRevision()
	expect(typeof v).toBe("number")
})

test("PUT system display message", async () => {
	const success = await client.putSystemDisplayMessage("Testing", "Done")
	expect(success).toBe(true)
})
