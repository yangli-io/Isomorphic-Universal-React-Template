require("babel-polyfill");
require("babel-core/register");

global.isBrowser = false;

if (process.env.NODE_ENV !== "production") {
	if (!require("piping")({hook: true, includeModules: false})) {
		return;
	}
}

require("./src/server/server");
