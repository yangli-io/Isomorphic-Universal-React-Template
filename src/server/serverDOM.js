import { jsdom } from 'jsdom';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactMarkupChecksum from 'react/lib/ReactMarkupChecksum';

const dom = '<!doctype html><html><body><div id="root"></div></body></html>';

//For any global dom activities
const doc = jsdom(dom);
const win = doc.defaultView;
global.document = doc;
global.window = win;
(function (window) {
	for (let key in window) {
		if (!window.hasOwnProperty(key)) continue;
		if (key in global) continue;

		global[key] = window[key]
	}
})(win);

export default function(reactElement) {
	//renders the dom
	const doc = jsdom(dom);
	const reactRoot = doc.defaultView.document.getElementById('root');
	render(reactElement, reactRoot);

	return {
		getDOMString: function(){
			const htmlString = reactRoot.innerHTML;
			const htmlStringWithCheckSum = ReactMarkupChecksum.addChecksumToMarkup(htmlString);
			return htmlStringWithCheckSum;
		}
	}
}
