import {
	UltimakerClient,
	UltimakerClientConfig,
} from "@jamesgopsill/ultimaker-client"

const config: UltimakerClientConfig = {
	url: "",
}

const client = new UltimakerClient(config)

{
	const r = await client.api.v1.auth.request.post()
	if (r.ok) {
		console.log(r.data)
	}
}
