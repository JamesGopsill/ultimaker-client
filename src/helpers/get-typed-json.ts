import { fetch } from "cross-fetch"

export const getTypedJSON = <Type>(url: string, queryArgs?: {}) => {
	return new Promise<Type>(async (resolve, reject) => {
		let res

		if (typeof queryArgs != "undefined") {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(queryArgs),
			})
		} else {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
		}

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
