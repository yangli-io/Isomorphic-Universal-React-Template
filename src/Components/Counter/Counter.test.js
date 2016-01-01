import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
const proxyquire = require('proxyquire').noCallThru();

const initializeSpy = sinon.spy();
const incrementSpy = sinon.spy();
const decrementSpy = sinon.spy();
const counterActionsStub = {
	increment: incrementSpy,
	decrement: decrementSpy,
	initialize: initializeSpy
};

const Counter = proxyquire('./Counter', {
	'../../actions/counterActions': counterActionsStub
}).Counter;

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

	it('should have called the initialize action', () => {
		expect(initializeSpy).to.have.been.called;
	});

	describe('use clicks + button', () => {
		before(() => {
			const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
			TestUtils.Simulate.click(buttons[0]);
		});

		it('should have called the increment action', () => {
			expect(incrementSpy).to.have.been.called;
		});
	});

	describe('use clicks - button', () => {
		before(() => {
			const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
			TestUtils.Simulate.click(buttons[1]);
		});

		it('should have called the increment action', () => {
			expect(decrementSpy).to.have.been.called;
		});
	})
});
