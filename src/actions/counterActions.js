export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function initialize() {
	this.async.task((done) => {
		setTimeout(() => {
			done();
			this.dispatch({
				type: INCREMENT
			});
		}, 2000);
	});
}

export function increment() {
	this.dispatch({
		type: INCREMENT
	});
}

export function decrement() {
	this.dispatch({
		type: DECREMENT
	});
}
