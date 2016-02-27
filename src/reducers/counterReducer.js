import { INCREMENT, DECREMENT } from '../actions/counterActions';

export default function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      };
    case DECREMENT:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}
