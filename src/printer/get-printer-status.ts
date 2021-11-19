import { fetch } from "cross-fetch"

export const getPrinterStatus = (baseURL: string) => {
	return new Promise<string>(async (resolve, reject) => {
		const res = await fetch(baseURL + "/api/v1/printer", {
			method: "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
		})

		if (res.status == 200) {
			const data = await res.json()
			resolve(data.status)
		}
		reject(res)
	})
}
