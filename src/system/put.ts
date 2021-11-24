import { put } from "../helpers"
import { UltimakerSystemUpdateType } from "./interfaces"

export const putSystemCountry = (baseURL: string, country: string) => {
	const url = `${baseURL}/api/v1/system/country`
	const bodyArgs = { country: country }
	return put(url, 204, bodyArgs)
}

export const putSystemDisplayMessage = (
	baseURL: string,
	message: string,
	buttonCaption: string
) => {
	const url = `${baseURL}/api/v1/system/display_message`
	const bodyArgs = {
		message: message,
		button_caption: buttonCaption,
	}
	put(url, 200, bodyArgs)
}

export const putSystemFirmware = (
	baseURL: string,
	updateType: UltimakerSystemUpdateType
) => {
	const url = `${baseURL}/api/v1/system/firmware`
	const bodyArgs = { update_type: updateType }
	put(url, 200, bodyArgs)
}

export const putSystemName = (baseURL: string, name: string) => {
	const url = `${baseURL}/api/v1/system/name`
	const bodyArgs = { name: name }
	put(url, 204, bodyArgs)
}
