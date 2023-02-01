import { UltimakerClient } from "../src/index.js"
import { url } from "./test.config.js"
import { getMethods } from "../src/get-methods.js"

let c: UltimakerClient

beforeAll(() => {
	c = new UltimakerClient(url)
})

getMethods.map((method: any) => {
	test(`GET ${method.name}`, async () => {
		//@ts-ignore
		const r = await c[method.name]()
		if (r.ok) {
			console.log(r.data)
		} else {
			console.log(r.status, await r.text())
		}
		expect(r.ok).toBe(true)
	})
})
