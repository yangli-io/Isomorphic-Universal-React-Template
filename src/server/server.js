import koa from 'koa';
import proxy from 'koa-proxy';
import serve from 'koa-static';
import html from './markup/html';
import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';
import { instantiateStore } from '../shared';
import serverDOM from './serverDOM';

const app      = koa();
const hostname = process.env.HOSTNAME || 'localhost';
const port     = process.env.PORT || 8000;

app.use(serve('static', {defer: true}));

app.use(function *(next) {
	const location = this.url;

	yield ((callback) => {
		match({routes, location}, (error, redirectLocation, renderProps) => {
			if (redirectLocation) {
				this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
				return;
			}

			if (error || !renderProps) {
				callback(error);
				return;
			}

			renderProps = renderProps || {};

			const store = instantiateStore();
			const dom = serverDOM(<Provider store={store}><RoutingContext {...renderProps} /></Provider>); //trigger render

			store.async.taskAll().then(() => {
				const appMarkup = dom.getDOMString();
				const initialState = store.getState();
				this.type = 'text/html';
				this.body = html({appMarkup, initialState});

				callback(null);
			})
		});
	});
});


app.listen(port, () => {
	console.info('server started at http://%s:%s', hostname, port);
});
