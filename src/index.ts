import { df } from "./df.js"
import { f } from "./f.js"
import * as T from "./types.js"

export interface UltimakerClientConfig {
	url: string
	username?: string
	password?: string
}

export class UltimakerClient {
	readonly baseUrl: string
	username = ""
	password = ""
	nc = 0
	cnonce

	constructor(config: UltimakerClientConfig) {
		this.baseUrl = config.url
		if (config.username) this.username = config.username
		if (config.password) this.password = config.password
		this.cnonce = randomString(16)
	}

	protected f = f
	protected df = df

	api = {
		v1: {
			auth: {
				request: {
					post: async (application: string, user: string) => {
						const formData = new FormData()
						formData.set("application", application)
						formData.set("user", user)
						const res = await this.f<T.AuthRequest>(
							"POST",
							"/api/v1/auth/request",
							formData,
						)
						if (res.ok) {
							this.username = res.data.id
							this.password = res.data.key
						}
						return res
					},
				},
				check: {
					get: () => {
						return this.f<T.AuthCheck>(
							"GET",
							`/api/v1/auth/check/${this.username}`,
						)
					},
				},
				verify: {
					get: () => {
						return this.df("GET", `/api/v1/auth/verify`)
					},
				},
			},
			airmanager: {
				get: () => {
					return this.f<T.AirManagerDetails | T.AirManagerNotAvailable>(
						"GET",
						"/api/v1/airmanager",
					)
				},
			},
			history: {
				events: {
					get: () => {
						return this.f<T.Event[]>("GET", "/api/v1/history/events")
					},
				},
				printJobs: {
					get: (id?: string) => {
						let url = "/api/v1/history/print_jobs"
						if (id) {
							url += `/${id}`
							return this.f<T.HistoricJob>("GET", url)
						}
						return this.f<T.HistoricJob[]>("GET", url)
					},
				},
			},
			printJob: {
				get: () => {
					return this.f<T.Job>("GET", "/api/v1/print_job")
				},
				post: (jobname: string, gcode: string) => {
					const blob = new Blob([gcode], { type: "text/plain" })
					const formData = new FormData()
					formData.append("jobname", jobname)
					formData.append("file", blob, "client.gcode")
					return this.df<T.PostJobResponse>(
						"POST",
						"/api/v1/print_job",
						formData,
					)
				},
				put: (target: T.JobTargetState) => {
					return this.df("PUT", "/api/v1/print_job", {
						target,
					})
				},
				uuid: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/uuid")
					},
				},
				timeTotal: {
					get: () => {
						return this.f<number>("GET", "/api/v1/print_job/time_total")
					},
				},
				timeElapsed: {
					get: () => {
						return this.f<number>("GET", "/api/v1/print_job/time_elapsed")
					},
				},
				state: {
					get: () => {
						return this.f<T.JobTargetState>("GET", "/api/v1/print_job/state")
					},
				},
				source: {
					get: () => {
						return this.f<T.JobSource>("GET", "/api/v1/print_job/source")
					},
				},
				sourceUser: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/source_user")
					},
				},
				sourceApplication: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/source_application")
					},
				},
				result: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/result")
					},
				},
				reprintUuid: {
					get: () => {
						return this.f<string>(
							"GET",
							"/api/v1/print_job/reprint_original_uuid",
						)
					},
				},
				progress: {
					get: () => {
						return this.f<number>("GET", "/api/v1/print_job/progress")
					},
				},
				pauseSource: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/pause_source")
					},
				},
				name: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/name")
					},
				},
				started: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/datetime_started")
					},
				},
				finished: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/datetime_finished")
					},
				},
				cleaned: {
					get: () => {
						return this.f<string>("GET", "/api/v1/print_job/datetime_cleaned")
					},
				},
			},
			materials: {
				get: (id?: string) => {
					let url = "api/v1/materials"
					if (id) {
						url += `/${id}`
						return this.f<string>("GET", url)
					}
					return this.f<string[]>("GET", url)
				},
			},
			printer: {
				get: () => {
					return this.f<T.Printer>("GET", "/api/v1/printer")
				},
				status: {
					get: () => {
						return this.f<string>("GET", "/api/v1/printer/status")
					},
				},
				led: {
					get: () => {
						return this.f<T.HSV>("GET", "/api/v1/printer/led")
					},
					put: (hsv: T.HSV) => {
						return this.df("PUT", "/api/v1/printer/led", hsv)
					},
					hue: {
						get: () => {
							return this.f("GET", "/api/v1/printer/led/hue")
						},
					},
					saturation: {
						get: () => {
							return this.f<number>("GET", "/api/v1/printer/led/saturation")
						},
					},
					brightness: {
						get: () => {
							return this.f<number>("GET", "/api/v1/printer/led/brightness")
						},
					},
				},
				heads: {
					get: (id?: string) => {
						let url = "api/v1/heads"
						if (id) {
							url += `/${id}`
							return this.f<T.PrinterHead>("GET", url)
						}
						return this.f<T.PrinterHead[]>("GET", url)
					},
				},
				bed: {
					temperature: {
						get: () => {
							return this.f<T.PrinterBed>(
								"GET",
								"/api/v1/printer/bed/temperature",
							)
						},
					},
					preHeat: {
						get: () => {
							return this.f<number>("GET", "/api/v1/printer/bed/pre_heat")
						},
					},
					type: {
						get: () => {
							return this.f<string>("GET", "/api/v1/printer/bed/type")
						},
					},
				},
			},
			system: {
				get: () => {
					return this.f<T.System>("GET", "/api/v1/system")
				},
				platform: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/platform")
					},
				},
				firmware: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/firmware")
					},
					stable: {
						get: () => {
							return this.f<string>("GET", "/api/v1/system/firmware/stable")
						},
					},
					testing: {
						get: () => {
							return this.f<string>("GET", "/api/v1/system/firmware/testing")
						},
					},
				},
				memory: {
					get: () => {
						return this.f<T.SystemMemory>("GET", "/api/v1/system/memory")
					},
				},
				time: {
					get: () => {
						return this.f<T.SystemTime>("GET", "/api/v1/system/time")
					},
				},
				name: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/name")
					},
				},
				country: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/country")
					},
				},
				language: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/language")
					},
				},
				uptime: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/uptime")
					},
				},
				type: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/type")
					},
				},
				variant: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/variant")
					},
				},
				hardware: {
					get: () => {
						return this.f<T.SystemHardware>("GET", "/api/v1/system/hardware")
					},
					revision: {
						get: () => {
							return this.f<number>("GET", "/api/v1/system/hardware/revision")
						},
					},
					typeId: {
						get: () => {
							return this.f<number>("GET", "/api/v1/system/hardware/typeid")
						},
					},
				},
				guid: {
					get: () => {
						return this.f<string>("GET", "/api/v1/system/guid")
					},
				},
			},
		},
	}
}

function randomString(length: number) {
	return Math.round(
		Math.pow(36, length + 1) - Math.random() * Math.pow(36, length),
	)
		.toString(36)
		.slice(1)
}
