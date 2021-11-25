import { UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

test("GET materials", async () => {
	const v = await client.getMaterials()
	expect(typeof v).toBe("object")
})
