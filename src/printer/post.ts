import { fetch } from "cross-fetch"

export const postPrinterBlink = (
	baseURL: string,
	frequency: number,
	count: number
) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer/led/blink", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				frequency,
				count,
			}),
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
