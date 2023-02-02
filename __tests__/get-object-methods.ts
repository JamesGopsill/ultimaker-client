import { UltimakerClient } from "../src/index.js"
import { url } from "./test.config.js"

let c: UltimakerClient
const materialUuid = "9cfe5bf1-bdc5-4beb-871a-52c70777842d"

beforeAll(() => {
	c = new UltimakerClient(url)
})

test("GET material", async () => {
	const r = await c.getMaterial(materialUuid)
	if (r.ok) {
		console.log(r.data)
		expect(r.ok).toBe(true)
	} else {
		console.log(r.status, await r.text())
		expect(r.ok).toBe(false)
	}
})
