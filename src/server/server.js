import koa from "koa";
import proxy from "koa-proxy";
import serve from "koa-static";
import html from './markup/html';
import React from "react";
import { renderToString } from "../../node_modules/react-dom/server";
import { RoutingContext, match } from "react-router";

import routes from "../routes";

const app      = koa();
const hostname = process.env.HOSTNAME || "localhost";
const port     = process.env.PORT || 8000;

app.use(serve("static", {defer: true}));

app.use(function *(next) {
	const location = this.url;
	const webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";

	yield ((callback) => {
		match({routes, location}, (error, redirectLocation, renderProps) => {
			if (redirectLocation) {
				this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
				return;
			}

			if (error || !renderProps) {
				callback(error);
				return;
			}

			renderProps = renderProps || {};
			const appMarkup = renderToString(<RoutingContext {...renderProps} />);
			this.type = "text/html";
			this.body = html({appMarkup});

			callback(null);
		});
	});
});


app.listen(port, () => {
	console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to http://%s:%s", hostname, port);
});
