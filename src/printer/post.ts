import { fetch } from "cross-fetch"
import { PrinterHeadPosition } from "."
import { post } from "../helpers"
import { ValidateHeaderResponse } from "./interfaces"

export const postPrinterBlink = (
	baseURL: string,
	frequency: number,
	count: number
) => {
	const url = `${baseURL}/api/v1/printer/led/blink`
	const bodyArgs = {
		frequency,
		count,
	}
	return post(url, 204, bodyArgs)
}

export const postPrinterBeep = (
	baseURL: string,
	frequency: number,
	duration: number
) => {
	const url = `${baseURL}/api/v1/printer/beep`
	const bodyArgs = {
		frequency,
		duration,
	}
	return post(url, 204, bodyArgs)
}

export const postPrinterHeadPosition = (
	baseURL: string,
	headID: string,
	position: PrinterHeadPosition
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/position`
	return post(url, 200, {
		action: position,
	})
}

export const postPrinterValidateHeader = (baseURL: string, gcode: string) => {
	return new Promise<ValidateHeaderResponse>(async (resolve, reject) => {
		let formData: any
		// let blob: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js
			//const buffer = require("buffer")
			//blob = new buffer.Blob([gcode], { type: "text/plain" })
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode)
		} else {
			// Browser
			//blob = new Blob([gcode], { type: "text/plain" })
			formData = new FormData()
			formData.append("file", gcode)
		}

		const res = await fetch(baseURL + "/api/v1/printer/validate_header", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
