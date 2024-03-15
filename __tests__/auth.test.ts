import { expect, test } from "bun:test"
import { UltimakerClient, UltimakerClientConfig } from "../src/index.js"
import { url } from "./test.config.js"

test("Client Created", () => {
	const config: UltimakerClientConfig = {
		url,
	}
	const c = new UltimakerClient(config)
	expect(c).toBeInstanceOf(UltimakerClient)
})
