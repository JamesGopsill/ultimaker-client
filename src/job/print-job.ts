import { UltimakerClient } from ".."
import { fetch } from "cross-fetch"

/**
 * Submit a job to the printer.
 *
 * @param this An instance of UltimakerClient.
 * @param jobname Provide a name for the job.
 * @param gcode Provide the gcode.
 * @returns
 */
export const printJob = async function (
	this: UltimakerClient,
	jobname: string,
	gcode: string
): Promise<Response> {
	const formData = new FormData()
	formData.append("jobname", jobname)

	const blob = new Blob([gcode], { type: "text/plain" })
	formData.append("file", blob, "test.gcode")

	return fetch(this.endpoint + "/api/v1/print_job", {
		method: "POST",
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
		body: formData,
	})
}
