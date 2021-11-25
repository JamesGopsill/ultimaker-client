import { get } from "../helpers"
import {
	Cartesian,
	ExtruderDetails,
	Feeder,
	Hotend,
	HotendOffset,
	PrinterBed,
	PrinterDetails,
	PrinterHead,
} from "./interfaces"

export const getPrinter = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer`
	return get<PrinterDetails>(url)
}

export const getPrinterStatus = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/status`
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

export const getPrinterHead = (baseURL: string, headIndex: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}`
	return get<PrinterHead>(url)
}

export const getPrinterHeadPosition = (baseURL: string, headIndex: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/position`
	return get<Cartesian>(url)
}

export const getPrinterHeadMaxSpeed = (baseURL: string, headIndex: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/max_speed`
	return get<Cartesian>(url)
}

export const getPrinterHeadAcceleration = (
	baseURL: string,
	headIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/max_speed`
	return get<number>(url)
}

export const getPrinterHeadJerk = (baseURL: string, headIndex: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/jerk`
	return get<Cartesian>(url)
}

export const getPrinterHeadExtruders = (baseURL: string, headIndex: string) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders`
	return get<ExtruderDetails[]>(url)
}

export const getPrinterHeadExtruder = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}`
	return get<ExtruderDetails>(url)
}

export const getPrinterHeadExtruderHotendOffset = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend/offset`
	return get<HotendOffset>(url)
}

export const getPrinterHeadExtruderFeeder = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder`
	return get<Feeder>(url)
}

export const getPrinterHeadExtruderFeederJerk = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/jerk`
	return get<number>(url)
}

export const getPrinterHeadExtruderFeederMaxSpeed = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/max_speed`
	return get<number>(url)
}

export const getPrinterHeadExtruderFeederAcceleration = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/feeder/acceleration`
	return get<number>(url)
}

export const getPrinterHeadExtruderActiveMaterial = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material`
	return get<{
		length_remaining: number
		GUID: string
	}>(url)
}

export const getPrinterHeadExtruderActiveMaterialLengthRemaining = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material/length_remaining`
	return get<number>(url)
}

export const getPrinterHeadExtruderActiveMaterialGUID = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/active_material_guid`
	return get<string>(url)
}

export const getPrinterHeadExtruderHotend = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend`
	return get<Hotend>(url)
}

export const getPrinterHeadExtruderHotendTemperature = (
	baseURL: string,
	headIndex: string,
	extruderIndex: string
) => {
	const url = `${baseURL}/api/v1/printer/heads/${headIndex}/extruders/${extruderIndex}/hotend/temperature`
	return get<number>(url)
}

export const getPrinterBed = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed`
	return get<PrinterBed>(url)
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
		remaining?: number
	}>(url)
}

export const getPrinterBedType = (baseURL: string) => {
	const url = `${baseURL}/api/v1/printer/bed/type`
	return get<string>(url)
}
