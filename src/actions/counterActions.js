export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function initialize(store) {
  store.async.task((done) => {
    setTimeout(() => {
      store.dispatch({
        type: INCREMENT
      });
      done();
    }, 500);
  });
}

export function increment(store) {
  store.dispatch({
    type: INCREMENT
  });
}

export function decrement(store) {
  store.dispatch({
    type: DECREMENT
  });
}
