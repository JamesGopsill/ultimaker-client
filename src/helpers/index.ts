import { fetch } from "cross-fetch"

export const get = <Type>(url: string, bodyArgs?: {}) => {
	return new Promise<Type>(async (resolve, reject) => {
		let res

		if (typeof bodyArgs != "undefined") {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(bodyArgs),
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

export const put = (url: string, status: number, bodyArgs?: {}) => {
	return new Promise<boolean>(async (resolve, reject) => {
		let res

		if (typeof bodyArgs != "undefined") {
			res = await fetch(url, {
				method: "PUT",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(bodyArgs),
			})
		} else {
			res = await fetch(url, {
				method: "PUT",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
		}

		if (res.status == status) resolve(true)
		reject(res)
	})
}

export const post = (url: string, status: number, bodyArgs?: {}) => {
	return new Promise<boolean>(async (resolve, reject) => {
		let res

		if (typeof bodyArgs != "undefined") {
			res = await fetch(url, {
				method: "PUT",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(bodyArgs),
			})
		} else {
			res = await fetch(url, {
				method: "PUT",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
		}

		if (res.status == status) resolve(true)
		reject(res)
	})
}
