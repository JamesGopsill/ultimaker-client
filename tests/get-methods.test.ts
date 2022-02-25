import { ResponseError, UltimakerClient } from "../src"
import { getMethods } from "../src/methods"
import { ip } from "./test.config"

const client = new UltimakerClient(ip)

for (const method of getMethods) {
	test(`GET ${method.name}`, async () => {
		try {
			//@ts-ignore: because we are programmatically iterating through the methods.
			const r = await client[method.name]()
			// console.log(r)
			expect(typeof r).toBe(method.expects)
		} catch (e) {
			if (e instanceof ResponseError) {
				// console.log(method.name, e.response.status, e.response.statusText)
				// Will report NOT FOUND if there is no job running or the airmanager does not exist. Need to check for erronous url inputs too. Do they come up with a different error?
				expect(e.response.statusText).toBe("NOT FOUND")
			} else {
				console.log(method.name, e)
				expect(true).toBe(false)
			}
		}
	})
}
