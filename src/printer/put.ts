import { put } from "../helpers"

export const putPrinterLED = (
	baseURL: string,
	color: {
		hue: number
		saturation: number
		brightness: number
	}
) => {
	const bodyArgs = {
		color: color,
	}
	return put(baseURL + "/api/v1/printer/", bodyArgs, 204)
}

/*
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/led", {
			method: "PUT",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				hue: color.hue,
				saturation: color.saturation,
				brightness: color.brightness,
			}),
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
	*/
