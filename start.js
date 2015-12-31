require("babel-polyfill");
require("babel-core/register");

global.isBrowser = false;


require("./src/server/server");
