import { get } from "../helpers"
import { UltimakerSystemDetails } from "./interfaces"

export const getSystemCountry = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/country`
	return get<string>(url)
}

export const getSystemFirmwareStable = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/firmware/stable`
	return get<string>(url)
}

export const getSystemFirmwareStatus = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/firmware/status`
	return get<string>(url)
}

export const getSystemFirmwareTesting = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/firmware/testing`
	return get<string>(url)
}

export const getSystemFirmware = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/firmware`
	return get<string>(url)
}

export const getSystemGUID = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/guid`
	return get<string>(url)
}

export const getSystemHardwareRevision = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/hardware/revision`
	return get<string>(url)
}

export const getSystemHardwareTypeId = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/hardware/typeid`
	return get<number>(url)
}

export const getSystemHardware = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/hardware`
	return get<{
		typeid: number
		revision: number
	}>(url)
}

export const getSystemHostname = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/hostname`
	return get<string>(url)
}

export const getSystemLanguage = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/language`
	return get<string>(url)
}

export const getSystemLog = (
	baseURL: string,
	boot: number = 0,
	lines: number = 50
) => {
	const url = `${baseURL}/api/v1/system/log`
	const bodyArgs = {
		boot,
		lines,
	}
	return get<string[]>(url, bodyArgs)
}

export const getSystemMemory = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/memory`
	return get<{
		total: number
		used: number
	}>(url)
}

export const getSystemName = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/name`
	return get<string>(url)
}

export const getSystemPlatform = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/platform`
	return get<string>(url)
}

export const getSystemTime = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/time`
	return get<{
		utc: number
	}>(url)
}

export const getSystemType = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/type`
	return get<string>(url)
}

export const getSystemUpTime = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/uptime`
	return get<number>(url)
}

export const getSystemVariant = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system/variant`
	return get<number>(url)
}

export const getSystem = (baseURL: string) => {
	const url = `${baseURL}/api/v1/system`
	return get<UltimakerSystemDetails>(url)
}
