import { get } from "../helpers"
import {
	Cartesian,
	ExtruderDetails,
	Feeder,
	Hotend,
	HotendOffset,
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

export const getPrinterHeadExtruderHotendOffset = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/hotend/offset`
	return get<HotendOffset>(url)
}

export const getPrinterHeadExtruderFeeder = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/feeder`
	return get<Feeder>(url)
}

export const getPrinterHeadExtruderFeederJerk = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/feeder/jerk`
	return get<number>(url)
}

export const getPrinterHeadExtruderFeederMaxSpeed = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/feeder/max_speed`
	return get<number>(url)
}

export const getPrinterHeadExtruderFeederAcceleration = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/feeder/acceleration`
	return get<number>(url)
}

export const getPrinterHeadExtruderActiveMaterial = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/active_material`
	return get<{
		length_remaining: number
		GUID: string
	}>(url)
}

export const getPrinterHeadExtruderActiveMaterialLengthRemaining = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/active_material/length_remaining`
	return get<number>(url)
}

export const getPrinterHeadExtruderActiveMaterialGUID = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/active_material_guid`
	return get<string>(url)
}

export const getPrinterHeadExtruderHotend = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/hotend`
	return get<Hotend>(url)
}

export const getPrinterHeadExtruderHotendTemperature = (
	baseURL: string,
	headID: string,
	extruderID: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headID}/extruders/${extruderID}/hotend/temperature`
	return get<number>(url)
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
