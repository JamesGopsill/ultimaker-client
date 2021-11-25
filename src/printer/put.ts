import { Cartesian } from "."
import { put } from "../helpers"
import { HSV } from "./interfaces"

export const putPrinterLED = (baseURL: string, color: HSV) => {
	const url = `${baseURL}/api/v1/printer/led`
	const bodyArgs = {
		color: color,
	}
	return put(url, 204, bodyArgs)
}

export const putPrinterLEDHue = (baseURL: string, hue: number) => {
	const url = `${baseURL}/api/v1/printer/led/hue`
	const bodyArgs = { hue }
	return put(url, 204, bodyArgs)
}

export const putPrinterLEDSaturation = (
	baseURL: string,
	saturation: number
) => {
	const url = `${baseURL}/api/v1/printer/led/saturation`
	const bodyArgs = { saturation }
	return put(url, 204, bodyArgs)
}

export const putPrinterLEDBrightness = (
	baseURL: string,
	brightness: number
) => {
	const url = `${baseURL}/api/v1/printer/led/brightness`
	const bodyArgs = { brightness }
	return put(url, 204, bodyArgs)
}

export const putPrinterHeadPosition = (
	baseURL: string,
	headID: string,
	x: number,
	y: number,
	z: number,
	speed: number
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/position`
	const bodyArgs = {
		x,
		y,
		z,
		speed,
	}
	return put(url, 204, bodyArgs)
}

export const putPrinterHeadMaxSpeed = (
	baseURL: string,
	headID: string,
	xyz: Cartesian
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/max_speed`
	const bodyArgs = xyz
	return put(url, 204, bodyArgs)
}

export const putPrinterHeadJerk = (
	baseURL: string,
	headID: string,
	xyz: Cartesian
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/jerk`
	const bodyArgs = xyz
	return put(url, 204, bodyArgs)
}

export const putPrinterBedTemperature = (
	baseURL: string,
	temperature: number
) => {
	return new Promise<boolean>(async (resolve, reject) => {
		let formData: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("temperature", temperature)
		} else {
			// Browser
			formData = new FormData()
			formData.append("temperature", temperature)
		}

		const res = await fetch(baseURL + "/api/v1/printer/bed/temperature", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}

export const putPrinterBedPreHeat = (
	baseURL: string,
	temperature: number,
	timeout: number
) => {
	const url = `${baseURL}/api/v1/printer/bed/pre_heat`
	const bodyArgs = {
		temperature,
		timeout,
	}
	return put(url, 204, bodyArgs)
}
