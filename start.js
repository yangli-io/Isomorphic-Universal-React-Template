require("babel-polyfill");
require("babel-core/register");

global.isBrowser = false;

if (process.env.NODE_ENV !== "production") {
	try {
		if (!require("piping")({hook: true, includeModules: false})) {
			return;
		}
	} catch (e) {
		console.log('production environment - no piping');
	}
}

require("./src/server/server");
