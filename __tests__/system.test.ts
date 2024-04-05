import { expect, test } from "bun:test"
import { client } from "./setup.ts"

test("System", async () => {
	const r = await client.api.v1.system.get()
	expect(r.ok).toEqual(true)
})

test("System Firmware", async () => {
	const r = await client.api.v1.system.firmware.get()
	expect(r.ok).toEqual(true)
})

test("System Firmware Stable", async () => {
	const r = await client.api.v1.system.firmware.stable.get()
	expect(r.ok).toEqual(true)
})

test("System Platform", async () => {
	const r = await client.api.v1.system.platform.get()
	expect(r.ok).toEqual(true)
})

test("System Memory", async () => {
	const r = await client.api.v1.system.memory.get()
	expect(r.ok).toEqual(true)
})
