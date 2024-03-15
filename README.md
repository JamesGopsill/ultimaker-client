# A Typescript client for the Ultimaker API

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It is an **unofficial** open-source client for connecting to your Ultimaker both through Node.js and Browser applications.

## Contents

- [Using ultimaker-client](#using-ultimaker-client)
- [Docs](#docs)
- [Testing](#testing)
- [Contributing](#contributing)
- [Support the Project](#support-the-project)
- [References](#references)

## Using ultimaker-client

The package is on npm and can be installed via your preferred package manager.

```
[npm|yarn|pnpm|bun] install @jamesgopsill/ultimaker-client
```

You can then use in your code via by importing

```typescript
import {
	UltimakerClient,
	UltimakerClientConfig,
} from "@jamesgopsill/ultimaker-client"

// Create a new client.
// You can find the IP address from the machine
const config: UltimakerClientConfig = {
	url: "http://xxx.xxx.xxx.xxx",
}

// Create an instance of the client
const client = new UltimakerClient(config)

// Authenticate your connection to the printer.
// You will have to press allow on your machine.
{
	const r = await client.api.v1.auth.request.post()
	if (r.ok) {
		console.log(r.data)
	}
}

// You may want to put in a wait for a key press
// or loop the auth.verify.get request before progressing
// I am using Bun.js sleep function to give me enough time to
// press allow on the machine.
await Bun.sleep(5000)

// Now start interacting with the machine.
const r = await client.getSystemName()
if (r.ok) console.log(r.data)
```

More examples will be added to the `examples` folder over time.

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/ultimaker-client/). If you enter the IP address of your machine in your browser window then that will take you to the API documentation.

## Testing

We're using Bun.js to develop the client and its in-built test functionality. We use a range of Ultimakers in the lab and are currently testing with printers using Ultimaker firmware version 6.40.

To test the functionality, make sure you have an Ultimaker on the network and create a `test.config.ts` file in the test directory (This is ignored by git via .gitignore). Then add the following export to make sure the tests know the IP address of the printer.

```typescript
export const url = "<PRINTER_URL>"
```

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

You can also support the developers directly by sponsoring them.

## Useful Resources

- [Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)
- [Ultimaker API and enabling CORS](https://community.ultimaker.com/topic/17964-um3-api-and-cors/)
- [Manual Control Ultimaker (SSH and Developer Mode)](https://community.ultimaker.com/topic/18509-manual-control-for-ultimaker-3-over-the-lan-or-wifi/)
- [More Ultimaker remote access stuff](https://community.ultimaker.com/topic/15604-inside-the-ultimaker-3-day-3-remote-access-part-2/)
- [Git autocrlf](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)
