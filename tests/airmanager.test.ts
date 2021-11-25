import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

test("GET airmanager", async () => {
	const v = await client.getAirManager()
	expect(typeof v).toBe("object")
})
