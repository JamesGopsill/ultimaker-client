import { fetch } from "cross-fetch"

export const putSystemDisplayMessage = (
	baseURL: string,
	message: string,
	buttonCaption: string
) => {
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
}
