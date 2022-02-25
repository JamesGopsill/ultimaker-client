import { ResponseError, UltimakerClient } from "../src"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

test("GET single job history", async () => {
	try {
		const tmp = await client.getJobHistory()
		const r = await client.getSingleJobHistory(tmp[0].uuid)
		expect(typeof r).toBe("object")
	} catch (e) {
		if (e instanceof ResponseError) {
			console.log(e.response.status)
			console.log(e.response.statusText)
		}
		expect(true).toBe(false)
	}
})
