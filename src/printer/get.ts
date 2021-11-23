import { get } from "../helpers"
import {
	Cartesian,
	ExtruderDetails,
	PrinterDetails,
	PrinterHead,
} from "./interfaces"

export const getPrinter = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer`
	return get<PrinterDetails>(url)
}

export const getPrinterStatus = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer`
	return get<string>(url)
}

export const getPrinterLED = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/led`
	return get<{
		hue: number
		saturation: number
		brightness: number
	}>(url)
}

export const getPrinterLEDHue = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/led/hue`
	return get<number>(url)
}

export const getPrinterLEDSaturation = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/led/saturation`
	return get<number>(url)
}

export const getPrinterLEDBrightness = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/led/brightness`
	return get<number>(url)
}

export const getPrinterHeads = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/heads`
	return get<PrinterHead[]>(url)
}

export const getPrinterHead = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}`
	return get<PrinterHead>(url)
}

export const getPrinterHeadPosition = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/position`
	return get<Cartesian>(url)
}

export const getPrinterHeadMaxSpeed = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/max_speed`
	return get<Cartesian>(url)
}

export const getPrinterHeadAcceleration = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/max_speed`
	return get<number>(url)
}

export const getPrinterHeadJerk = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/jerk`
	return get<Cartesian>(url)
}

export const getPrinterHeadExtruders = (baseURL: string, headID: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders`
	return get<ExtruderDetails[]>(url)
}

export const getPrinterHeadExtruder = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}`
	return get<ExtruderDetails>(url)
}

export const getPrinterBed = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed`
	return get<{
		temperature: {
			target: number
			current: number
		}
	}>(url)
}

export const getPrinterBedTemperature = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed/temperature`
	return get<{
		target: number
		current: number
	}>(url)
}

export const getPrinterBedPreHeat = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed/pre_heat`
	return get<{
		active: boolean
		remaining: number
	}>(url)
}

export const getPrinterBedType = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed/type`
	return get<string>(url)
}
