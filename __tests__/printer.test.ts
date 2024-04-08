import { expect, test } from "bun:test"
import { client } from "./setup.ts"

test("Printer LED", async () => {
	const r = await client.api.v1.printer.led.get()
	if (r.ok) console.log(r.data)
	expect(r.ok).toEqual(true)
})
