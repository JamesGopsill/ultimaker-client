# A Typescript client for the Ultimaker API

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It currently requires one to disable the authentication on the Ultimaker as well as add CORS if one wishes to use the client within a webapp. Therefore, we strongly recommend using this on a closed local network to avoid people being able to access and send jobs to your printer!

We are looking at implementing digest authentication in the future but primary objective for now is to provide the functionality required for our agent-based manufacturing research program.

It is also an **unofficial** open-source client for connecting to your Ultimaker. It is isomorphic and able to both in Node.js and the Browser.

## Contents

- [Configuring the Ultimaker](#configuring-the-ultimaker)
- [Using ultimaker-client](#using-ultimaker-client)
- [Docs](#docs)
- [Testing](#testing)
- [Contributing](#contributing)
- [Support the Project](#support-the-project)
- [References](#references)

## Configuring the Ultimaker

To make use of this client, you will need to disable authentication and enable cors on the Ultimaker API.

To start, you will need to enable developer mode on your Ultimaker, which can be achieved through the settings menu on the printer. The screen will display that you're in developer mode and provide the local IP address of the printer.

![Ultimaker in Developer Mode](https://raw.githubusercontent.com/JamesGopsill/ultimaker-client/main/figs/dev-mode.jpeg)

Now you need to `ssh` into your printer from your machine. The default user and password are `root` and `ultimaker`. After successfully connecting to the printer, you should see your terminal look a bit like this:

![SSH Ultimaker Terminal](https://raw.githubusercontent.com/JamesGopsill/ultimaker-client/main/figs/terminal.png)

You will want to modify `/usr/share/griffin/griffin/interface/http/server.py` with the following content. I would recommend copying the file using `scp`:

```
scp root@[ULTIMAKER_IP_ADDRESS]:/usr/share/griffin/griffin/interface/http/server.py ./server.py
```

Make a backup and then edit `server.py` using your favourite code editor with the following:

```python
# [...find this bit in the file]

def __init__(self, import_name, **kwargs):
	if Server._instance is not None:
		raise ValueError("Duplicate singleton creation")

	# If the constructor is called and there is no instance, set the instance to self.
	# This is done because we can't make constructor private
	Server._instance = self

	# Create the authentication container, this keeps track of sessions and authenticated users.
	self._authentication = AuthenticationController()

	# [!! add the line below to disable authentication !!]
	self._authentication.disableAuthentication()

	# [file continues...]
```

Scroll down in the file and add this line to the end of the `__init__` function.


```python
# [...find this bit in the file]
# Disable the default werkzeug logger, this logs all http requests, which spams the logs
logging.getLogger('werkzeug').disabled = True

# [!! add the line below to add CORS support !!]
self.after_request(Server.allow_cors)
# [file continues...]
```

And at the end of the class, add the `allow_cors` function.

```python
# [...at the bottom of the class add this method to provide open access via CORS]
@staticmethod
def allow_cors(response):
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	response.headers.add('Access-Control-Allow-Credentials', 'true')
	return response 
```

Make sure you make a copy of the original file just in case.

With the edits made, `scp` the file back to the printer.

```
scp ./server.py root@[ULTIMAKER_IP_ADDRESS]:/usr/share/griffin/griffin/interface/http/server.py
```

You can restart the Ultimaker API using `systemctl restart griffin.interface.http` or simply restarting the machine.

## Using ultimaker-client

To install the package, use the following code. I will look to putting up on npm soon.

```
pnpm add @jamesgopsill/ultimaker-client
```

You can then use in your code via by importing

```typescript
import { UltimakerClient } from "@jamesgopsill/ultimaker-client"

// Create a new client.
const client = new UltimakerClient("<URL_GOES_HERE>")

const r = await client.getSystemName()
if (r.ok) console.log(r.data)
```

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/ultimaker-client/).

## Testing

Testing uses jest. We use a range of Ultimakers in the lab and are currently testing with printers using version 6.40 Ultimaker firmware.

To test the functionality, make sure you have an Ultimaker on the network and create a `test.config.ts` file in the test directory (This is ignore by git via .gitignore). Then add the following export to make sure the tests know the ip address of the printer.

```
export const url = "<PRINTER_URL>"
```

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

You can also support the developers directly by sponsoring them.

## References

- [Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)
- [Ultimaker API and enabling CORS](https://community.ultimaker.com/topic/17964-um3-api-and-cors/)
- [Manual Control Ultimaker (SSH and Developer Mode)](https://community.ultimaker.com/topic/18509-manual-control-for-ultimaker-3-over-the-lan-or-wifi/)
- [More Ultimaker remote access stuff](https://community.ultimaker.com/topic/15604-inside-the-ultimaker-3-day-3-remote-access-part-2/)
- [Git autocrlf](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)
