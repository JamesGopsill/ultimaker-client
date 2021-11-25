import { UltimakerClient, UltimakerPrinterEndpoint } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

// TODO: create all the test when connected to a printer.

test("POST blink", async () => {
	const success = await client.postPrinterBlink(1, 2)
	await wait(2500) // wait 3 seconds to let the printer blink out
	expect(success).toBe(true)
})

test("PUT led", async () => {
	const success = await client.putPrinterLED(
		UltimakerPrinterEndpoint.UltimakerLEDColors.WHITE
	)
	await wait(500)
	expect(success).toBe(true)
})

test("GET printer", async () => {
	const v = await client.getPrinter()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET status", async () => {
	const v = await client.getPrinterStatus()
	console.log(v)
	expect(typeof v).toBe("string")
})

test("GET printer LED", async () => {
	const v = await client.getPrinterLED()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET printer LED Hue", async () => {
	const v = await client.getPrinterLEDHue()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("GET printer LED Brightness", async () => {
	const v = await client.getPrinterLEDBrightness()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("GET printer LED Saturation", async () => {
	const v = await client.getPrinterLEDSaturation()
	console.log(v)
	expect(typeof v).toBe("number")
})

test("GET printer heads", async () => {
	const v = await client.getPrinterHeads()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET printer head", async () => {
	const v = await client.getPrinterHead("0")
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET printer head extruder", async () => {
	const v = await client.getPrinterHeadExtruder("0", "0")
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET printer bed", async () => {
	const v = await client.getPrinterBed()
	console.log(v)
	expect(typeof v).toBe("object")
})

/*
test("POST validate header", async () => {
	const gcode = fs.readFileSync(__dirname + "/UM3E_20mm_cube.gcode").toString()
	const v = await client.postPrinterValidateHeader(gcode)
	console.log(v)
	expect(typeof v).toBe("object")
})
*/
