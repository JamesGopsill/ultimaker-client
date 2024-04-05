import { UltimakerClient, UltimakerClientConfig } from "../src/index.ts" //"@jamesgopsill/ultimaker-client"

const config: UltimakerClientConfig = {
	url: "",
}

const client = new UltimakerClient(config)

{
	const r = await client.api.v1.auth.request.post("UltimakerClient", "Test")
	if (r.ok) {
		console.log(r.data)
	}
}
