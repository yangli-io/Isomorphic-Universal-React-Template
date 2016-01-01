import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { jsdom } from 'jsdom';

global.expect = expect;
global.sinon = sinon;

global.setBrowser = function() {
	global.isBrowser = true;
};
global.setServer = function() {
	global.isBrowser = false;
};

chai.Should();
chai.use(sinonChai);

// setup the simplest document possible
const doc = jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
(function (window) {
	for (var key in window) {
		if (!window.hasOwnProperty(key)) continue;
		if (key in global) continue;

		global[key] = window[key]
	}
})(win);
