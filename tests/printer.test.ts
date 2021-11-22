import { UltimakerClient, UltimakerLEDColors } from "../src"
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
	expect(success).toBe(true)
	await wait(2500) // wait 3 seconds to let the printer blink out
})

test("PUT led", async () => {
	const success = await client.putPrinterLED(UltimakerLEDColors.WHITE)
	expect(success).toBe(true)
	await wait(500)
})

test("GET status", async () => {
	const status = await client.getPrinterStatus()
	expect(typeof status).toBe("string")
})
