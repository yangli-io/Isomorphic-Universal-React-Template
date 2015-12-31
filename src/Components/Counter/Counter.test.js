import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import { Counter } from './Counter';

describe('Counter', () => {
	let component;
	let renderedElement;
	before(() => {
		setBrowser();
		component = renderIntoDocument(<Counter/>);
		renderedElement = findDOMNode(component);
	});

	it('should be renderable', () => {
		expect(renderedElement).to.not.be.null;
	});
});
