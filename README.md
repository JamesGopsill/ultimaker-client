# A Typescript client for the Ultimaker API

**Warning:** This has been developed to be used for R&D purposes only and currently requires one to disable the authentication on the Ultimaker as well as add CORS if one wishes to use the client within a webapp. Therefore, we stringy recommend using this on a closed local network to avoid people being able to access and send jobs to your printer.

We are looking at implementing digest authentication in the future but primary objective for now is to provide the functionality required for our agent-based manufacturing research program.

## Configuring the Ultimaker

To make use of this client, you will need to disable authentication and enable cors on the Ultimaker API.

To start, you will need to enable developer mode on your Ultimaker, which can be achieved through the settings menu on the printer. The screen will display that you're in developer mode and provide the local IP address of the printer.

**[TODO: add image]**

Now you need to `ssh` into your printer from your machine. The default user and password are **XX** and **YY**. After successfully connecting to the printer, you should see your terminal look a bit like this:

**[TODO: add terminal content and check that you can nano into a file]**

You will want to modify the following file `/usr/share/griffin/griffin/interface/http/server.py` with the following content.

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

Scroll down in the file a bit and add.


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

With the edits made, you can restart the Ultimaker API using `systemctl restart griffin.interface.http` or simply restarting the machine.

## Connecting to the printer with the client

**[TODO]**

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/).

## Testing

Testing is performed using jest. We use a range of Ultimakers in the lab and are currently testing with printers using version X.XX Ultimaker firmware.

## Roadmap

The first objective is to build a client that implements the entire v1 Ultimaker API without auth. Having achieved this, we will look to add digest auth and increment the version.

| Version  | Content |
| ------------- | ------------- |
| 0.1.0  | A smattering of API functions that we have needed to access for our research project. |
| 0.2.0  | `/system` REST API functionality implemented. |
| 0.3.0  | `/printer` REST API functionality implemented. |
| 0.4.0  | `/job` REST API functionality implemented. |
| 1.0.0  | All endpoints implemented. |
| 1.1.0  | Digest authentication. |

## Contributors

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). Mor details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please go to **[TODO: Setup]**.

## References

- [Ultimaker API and enabling CORS](https://community.ultimaker.com/topic/17964-um3-api-and-cors/)
- [Manual Control Ultimaker (SSH and Developer Mode)](https://community.ultimaker.com/topic/18509-manual-control-for-ultimaker-3-over-the-lan-or-wifi/)
- [More Ultimaker remote access stuff](https://community.ultimaker.com/topic/15604-inside-the-ultimaker-3-day-3-remote-access-part-2/)