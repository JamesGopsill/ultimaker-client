import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

// Wait function (milliseconds)
const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms))

beforeAll(() => {
	// Test if the IP address is valid and you can connect to the printer
})

test("GET network", async () => {
	const networkInformation = await client.getNetwork()
	// console.log(systemInformation)
	expect(typeof networkInformation).toBe("object")
})

test("GET wifi networks", async () => {
	const wifiNetworks = await client.getWifiNetworks()
	// console.log(systemInformation)
	expect(typeof wifiNetworks).toBe("object")
})

// TODO: PUT and DELETE wifi network tests.
