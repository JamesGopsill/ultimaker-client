export const getMethods = [
	{
		name: "getAirManager",
		endpoint: "api/v1/airmanager",
	},
	{
		name: "getEventHistory",
		endpoint: "api/v1/history/events",
	},
	{
		name: "getJobHistory",
		endpoint: "api/v1/history/print_jobs",
	},
	{
		name: "getJob",
		endpoint: "api/v1/print_job",
	},
	{
		name: "getJobUUID",
		endpoint: "api/v1/print_job/uuid",
	},
	{
		name: "getJobTimeTotal",
		endpoint: "api/v1/print_job/time_total",
	},
	{
		name: "getJobTimeElapsed",
		endpoint: "api/v1/print_job/time_elapsed",
	},
	{
		name: "getJobState",
		endpoint: "api/v1/print_job/state",
	},
	{
		name: "getJobSource",
		endpoint: "api/v1/print_job/source",
	},
	{
		name: "getJobSourceUser",
		endpoint: "api/v1/print_job/source_user",
	},
	{
		name: "getJobSourceApplication",
		endpoint: "api/v1/print_job/source_application",
	},
	{
		name: "getJobResult",
		endpoint: "api/v1/print_job/result",
	},
	{
		name: "getJobReprintOriginalUUID",
		endpoint: "api/v1/print_job/reprint_original_uuid",
	},
	{
		name: "getJobProgress",
		endpoint: "api/v1/print_job/progress",
	},
	{
		name: "getJobPauseSource",
		endpoint: "api/v1/print_job/pause_source",
	},
	{
		name: "getJobName",
		endpoint: "api/v1/print_job/name",
	},
	{
		name: "getJobDateTimeStarted",
		endpoint: "api/v1/print_job/datetime_started",
	},
	{
		name: "getJobDateTimeFinished",
		endpoint: "api/v1/print_job/datetime_finished",
	},
	{
		name: "getJobDateTimeCleaned",
		endpoint: "api/v1/print_job/datetime_cleaned",
	},
]

export const getObjectMethods = [
	{
		name: "getSingleJobHistory",
		endpoint: "api/v1/history/print_jobs",
	},
]
