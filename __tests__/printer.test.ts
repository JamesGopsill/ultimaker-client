import { expect, test } from "bun:test"
import { client } from "./setup.ts"

test("Printer LED", async () => {
	const r = await client.api.v1.printer.led.put({
		hue: 0,
		saturation: 100,
		brightness: 100,
	})
	console.log(r)
	expect(r.ok).toEqual(true)
})

test("Printer LED", async () => {
	const r = await client.api.v1.printer.led.get()
	if (r.ok) console.log(r.data)
	expect(r.ok).toEqual(true)
})
