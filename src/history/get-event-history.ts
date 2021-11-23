import { fetch } from "cross-fetch"

export const getEventHistory = (
	baseURL: string,
	offset: number = 0,
	count: number = 50,
	typeID?: number
) => {
	return new Promise<
		[
			{
				time: string
				type_id: number
				message: string
				parameters: string[]
			}
		]
	>(async (resolve, reject) => {
		let bodyArgs: any = {
			offset: offset,
			count: count,
		}

		if (typeof typeID != "undefined") {
			bodyArgs = {
				offset: offset,
				count: count,
				type_id: typeID,
			}
		}

		const res = await fetch(baseURL + "/api/v1/history/events", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(bodyArgs),
		})

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
