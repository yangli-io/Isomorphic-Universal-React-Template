import { jsdom } from 'jsdom';
import { render } from 'react-dom';
import ReactMarkupChecksum from 'react/lib/ReactMarkupChecksum';

const dom = '<!doctype html><html><body><div id="root"></div></body></html>';

// For any global dom activities
const doc = jsdom(dom);
const win = doc.defaultView;
global.document = doc;
global.window = win;
(function generateProperties(window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
}(win));

export default function (reactElement) {
  // renders the dom
  const docInstance = jsdom(dom);
  const reactRoot = docInstance.defaultView.document.getElementById('root');
  render(reactElement, reactRoot);

  return {
    getDOMString() {
      const htmlString = reactRoot.innerHTML;
      const htmlStringWithCheckSum = ReactMarkupChecksum.addChecksumToMarkup(htmlString);
      return htmlStringWithCheckSum;
    }
  };
}
