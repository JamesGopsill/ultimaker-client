import { fetch } from "cross-fetch"

export const postMaterial = (
	baseURL: string,
	materialFileContents: string,
	filename: string,
	signatureFileContents: string
) => {
	return new Promise<Boolean>(async (resolve, reject) => {
		let formData: any
		let materialBlob: any
		let signatureBlob: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js

			const buffer = require("buffer")
			materialBlob = new buffer.Blob([materialFileContents], {
				type: "text/plain",
			})
			signatureBlob = new buffer.Blob([signatureFileContents], {
				type: "text/plain",
			})

			const FormData = require("form-data")

			formData = new FormData()
			formData.append("filename", filename)
			formData.append("file", materialBlob)
			formData.append("signature_file", signatureBlob)
		} else {
			// Browser

			materialBlob = new Blob([materialFileContents], { type: "text/plain" })
			signatureBlob = new Blob([signatureFileContents], { type: "text/plain" })

			const FormData = require("form-data")

			formData = new FormData()
			formData.append("filename", filename)
			formData.append("file", materialBlob)
			formData.append("signature_file", signatureBlob)
		}

		const res = await fetch(baseURL + "/api/v1/materials", {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})

		if (res.status == 204) resolve(true)
		reject(res)
	})
}
