export const getMethods = [
	{
		name: "getAirManager",
		endpoint: "api/v1/airmanager",
		expects: "object",
	},
	{
		name: "getEventHistory",
		endpoint: "api/v1/history/events",
		expects: "object",
	},
	{
		name: "getJobHistory",
		endpoint: "api/v1/history/print_jobs",
		expects: "object",
	},
	{
		name: "getJob",
		endpoint: "api/v1/print_job",
		expects: "object",
	},
	{
		name: "getJobUUID",
		endpoint: "api/v1/print_job/uuid",
		expects: "string",
	},
	{
		name: "getJobTimeTotal",
		endpoint: "api/v1/print_job/time_total",
		expects: "number",
	},
	{
		name: "getJobTimeElapsed",
		endpoint: "api/v1/print_job/time_elapsed",
		expects: "number",
	},
	{
		name: "getJobState",
		endpoint: "api/v1/print_job/state",
		expects: "string",
	},
	{
		name: "getJobSource",
		endpoint: "api/v1/print_job/source",
		expects: "string",
	},
	{
		name: "getJobSourceUser",
		endpoint: "api/v1/print_job/source_user",
		expects: "string",
	},
	{
		name: "getJobSourceApplication",
		endpoint: "api/v1/print_job/source_application",
		expects: "string",
	},
	{
		name: "getJobResult",
		endpoint: "api/v1/print_job/result",
		expects: "string",
	},
	{
		name: "getJobReprintOriginalUUID",
		endpoint: "api/v1/print_job/reprint_original_uuid",
		expects: "string",
	},
	{
		name: "getJobProgress",
		endpoint: "api/v1/print_job/progress",
		expects: "number",
	},
	{
		name: "getJobPauseSource",
		endpoint: "api/v1/print_job/pause_source",
		expects: "string",
	},
	{
		name: "getJobName",
		endpoint: "api/v1/print_job/name",
		expects: "string",
	},
	{
		name: "getJobDateTimeStarted",
		endpoint: "api/v1/print_job/datetime_started",
		expects: "string",
	},
	{
		name: "getJobDateTimeFinished",
		endpoint: "api/v1/print_job/datetime_finished",
		expects: "string",
	},
	{
		name: "getJobDateTimeCleaned",
		endpoint: "api/v1/print_job/datetime_cleaned",
		expects: "string",
	},
	{
		name: "getMaterials",
		endpoint: "api/v1/materials",
		expects: "object",
	},
	{
		name: "getPrinter",
		endpoint: "api/v1/printer",
		expects: "object",
	},
	{
		name: "getPrinterStatus",
		endpoint: "api/v1/printer/status",
		expects: "string",
	},
	{
		name: "getPrinterLED",
		endpoint: "api/v1/printer/led",
		expects: "object",
	},
	{
		name: "getPrinterLEDHue",
		endpoint: "api/v1/printer/led/hue",
		expects: "number",
	},
	{
		name: "getPrinterLEDSaturation",
		endpoint: "api/v1/printer/led/saturation",
		expects: "number",
	},
	{
		name: "getPrinterLEDBrightness",
		endpoint: "api/v1/printer/led/brightness",
		expects: "number",
	},
	{
		name: "getPrinterHeads",
		endpoint: "api/v1/printer/heads",
		expects: "object",
	},
	{
		name: "getPrinterBedTemperature",
		endpoint: "api/v1/printer/bed/temperature",
		expects: "object",
	},
	{
		name: "getPrinterBedPreHeat",
		endpoint: "api/v1/printer/bed/pre_heat",
		expects: "object",
	},
	{
		name: "getPrinterBedType",
		endpoint: "api/v1/printer/bed/type",
		expects: "string",
	},
	{
		name: "getSystem",
		endpoint: "api/v1/system",
		expects: "object",
	},
	{
		name: "getSystemPlatform",
		endpoint: "api/v1/system/platform",
		expects: "string",
	},
	{
		name: "getSystemPlatform",
		endpoint: "api/v1/system/platform",
		expects: "string",
	},
	{
		name: "getSystemFirmware",
		endpoint: "api/v1/system/firmware",
		expects: "string",
	},
	{
		name: "getSystemFirmwareStatus",
		endpoint: "api/v1/system/status",
		expects: "string",
	},
	{
		name: "getSystemFirmwareStable",
		endpoint: "api/v1/system/firmware/stable",
		expects: "string",
	},
	{
		name: "getSystemFirmwareTesting",
		endpoint: "api/v1/system/firmware/testing",
		expects: "string",
	},
	{
		name: "getSystemMemory",
		endpoint: "api/v1/system/memory",
		expects: "object",
	},
	{
		name: "getSystemTime",
		endpoint: "api/v1/system/time",
		expects: "object",
	},
	{
		name: "getSystemName",
		endpoint: "api/v1/system/name",
		expects: "string",
	},
	{
		name: "getSystemCountry",
		endpoint: "api/v1/system/country",
		expects: "string",
	},
	{
		name: "getSystemLanguage",
		endpoint: "api/v1/system/language",
		expects: "string",
	},
	{
		name: "getSystemUptime",
		endpoint: "api/v1/system/uptime",
		expects: "number",
	},
	{
		name: "getSystemType",
		endpoint: "api/v1/system/type",
		expects: "string",
	},
	{
		name: "getSystemVariant",
		endpoint: "api/v1/system/variant",
		expects: "string",
	},
	{
		name: "getSystemHardware",
		endpoint: "api/v1/system/hardware",
		expects: "object",
	},
	{
		name: "getSystemHardwareRevision",
		endpoint: "api/v1/system/hardware/revision",
		expects: "number",
	},
	{
		name: "getSystemHardwareTypeId",
		endpoint: "api/v1/system/hardware/typeid",
		expects: "number",
	},
	{
		name: "getSystemGUID",
		endpoint: "api/v1/system/guid",
		expects: "string",
	},
]
