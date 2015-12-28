import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import { AnotherPage } from './AnotherPage';

describe('AnotherPage', () => {
	let component;
	let renderedElement;
	before(() => {
		setBrowser();
		component = renderIntoDocument(<AnotherPage/>);
		renderedElement = findDOMNode(component);
	});

	it('should be renderable', () => {
		expect(renderedElement).to.not.be.null;
	});
});
