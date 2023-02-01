import type { UltimakerClient } from "./index.js"
import type * as Def from "./definitions"

export async function postJob<T>(
	this: UltimakerClient,
	jobname: string,
	gcode: string
) {
	let formData: any

	const blob = new Blob([gcode], { type: "text/plain" })
	formData = new FormData()
	formData.append("jobname", jobname)
	formData.append("file", blob, "client.gcode")

	const url = `${this.baseUrl}/api/v1/print_job`

	const config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
		body: formData,
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as Def.HttpResponse<T>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}
