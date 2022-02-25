import { ResponseError, UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

test("GET material", async () => {
	try {
		const r = await client.getMaterial("9cfe5bf1-bdc5-4beb-871a-52c70777842d")
		expect(typeof r).toBe("string")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status)
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
