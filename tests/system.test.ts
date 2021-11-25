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
	const v = await client.getSystem()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system name", async () => {
	const v = await client.getSystemName()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system GUID", async () => {
	const v = await client.getSystemGUID()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system plaftorm", async () => {
	const v = await client.getSystemPlatform()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system hostname", async () => {
	const v = await client.getSystemHostname()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system firmware", async () => {
	const v = await client.getSystemFirmware()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system firmware status", async () => {
	const v = await client.getSystemFirmwareStatus()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET system firmware stable", async () => {
	const v = await client.getSystemFirmwareStable()
	console.log(v)
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
	const v = await client.getSystemLog()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system country", async () => {
	const v = await client.getSystemCountry()
	console.log("System Country:", v)
	expect(typeof v).toBe("string")
})

/*
test("PUT system country", async () => {
	const v = await client.putSystemCountry("UK")
	console.log(v)
	expect(v).toBe(true)
})
*/

test("GET system language", async () => {
	const v = await client.getSystemLanguage()
	console.log("System Language:", v)
	expect(typeof v).toBe("string")
})

test("GET system uptime", async () => {
	const v = await client.getSystemUpTime()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("GET system variant", async () => {
	const v = await client.getSystemVariant()
	console.log("System Variant:", v)
	expect(typeof v).toBe("string")
})

test("GET system hardware", async () => {
	const v = await client.getSystemHardware()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system hardware typeid", async () => {
	const v = await client.getSystemHardwareTypeId()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("GET system hardware revision", async () => {
	const v = await client.getSystemHardwareRevision()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("PUT system display message", async () => {
	const v = await client.putSystemDisplayMessage("Testing", "Done")
	console.log(v)
	expect(v).toBe(true)
})
