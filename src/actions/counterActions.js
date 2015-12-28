export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment() {
	console.log('yolo');
	return dispatch => {
		dispatch({
			type: INCREMENT
		});
	}
}

export function decrement() {
	return dispatch => {
		dispatch({
			type: DECREMENT
		});
	}
}
