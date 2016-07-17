global.isBrowser = false;

global.window = {};

global.window.history = {
  listen: () => {}
};

require("babel-polyfill");
require("babel-core/register");
require("./src/server/server");


