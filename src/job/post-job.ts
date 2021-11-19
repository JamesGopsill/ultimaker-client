import { fetch } from "cross-fetch"

export const postJob = (baseURL: string, jobname: string, gcode: string) => {
	return new Promise<Response>(async (resolve, reject) => {
		const formData = new FormData()
		formData.append("jobname", jobname)

		const blob = new Blob([gcode], { type: "text/plain" })
		formData.append("file", blob, "test.gcode")

		const res = await fetch(baseURL + "/api/v1/print_job", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 200) resolve(res)
		reject(res)
	})
}
