import jsdom from 'jsdom';
import { render } from 'react-dom';

export default function(reactElement) {
    // setup the simplest document possible
	const doc = jsdom.jsdom('<!doctype html><html><body><div id="root"></div></body></html>')

    // get the window object out of the document
	const win = doc.defaultView;

   // set globals for mocha that make access to document and window feel
   // natural in the test environment
	const document = doc;
	const window = win;

	// take all properties of the window object and also attach it to the
	// mocha global object
	propagateToGlobal(win);

    // from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
	function propagateToGlobal (window) {
		for (let key in window) {
			if (!window.hasOwnProperty(key)) continue;
			if (key in global) continue;

			global[key] = window[key]
		}
	}

	const reactRoot = window.document.getElementById('root');
	render(reactElement, reactRoot);
}
