import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import routes from "routes";
import { createHistory } from "history";

const reactRoot = window.document.getElementById("react-root");
render(routes, reactRoot);

if (process.env.NODE_ENV !== "production") {
	if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
	    !reactRoot.firstChild.attributes["data-react-checksum"]) {
		console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
	}
}

