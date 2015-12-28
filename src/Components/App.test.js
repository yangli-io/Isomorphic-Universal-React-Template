import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import App from './App';

describe('App', () => {
	let component;
	let renderedElement;
	before(() => {
		setBrowser();
		component = renderIntoDocument(<App/>);
		renderedElement = findDOMNode(component);
	});

	it('should be renderable', () => {
		expect(renderedElement).to.not.be.null;
	});

	const expectedResult = 'hello world';
	it(`should render the text ${expectedResult}`, () => {
		expect(renderedElement.textContent).to.equal(expectedResult);
	});
});
