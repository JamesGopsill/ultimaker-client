import { UltimakerClient } from "../src"

test("Instantiate with wrong ip address", async () => {
	expect(() => {
		const client = new UltimakerClient("abcdefg")
	}).toThrow(TypeError)
})

test("Instantiate with a correctly formatted ip address", async () => {
	const client = new UltimakerClient("123.123.123.123")
	expect(client).toBeDefined()
})
