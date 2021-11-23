import { put } from "../helpers"
import { UltimakerSystemUpdateType } from "./interfaces"

export const putSystemCountry = (baseURL: string, country: string) => {
	const bodyArgs = { country: country }
	return put(baseURL, bodyArgs, 204)
}

export const putSystemDisplayMessage = (
	baseURL: string,
	message: string,
	buttonCaption: string
) => {
	const bodyArgs = {
		message: message,
		button_caption: buttonCaption,
	}
	put(baseURL, bodyArgs, 200)
}

export const putSystemFirmware = (
	baseURL: string,
	updateType: UltimakerSystemUpdateType
) => {
	const bodyArgs = { update_type: updateType }
	put(baseURL, bodyArgs, 200)
}

export const putSystemName = (baseURL: string, name: string) => {
	const bodyArgs = { name: name }
	put(baseURL, bodyArgs, 204)
}

/*
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/country", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				country: country
			})
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
	*/

/*
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/display_message", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				message_data: {
					message: message,
					button_caption: buttonCaption,
				},
			}),
		})

		if (res.status == 200) resolve(true)
		reject(res)
	})
	*/

/*
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				update_type: updateType,
			}),
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
	*/

/*
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/system/name", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				name: name
			})
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
	*/
