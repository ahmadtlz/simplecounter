import {
  counterState, CounterAction, INCREASE, DECREASE, RESET_ASYNC
} from './counter.types';

const initialState:counterState = {
  value: 0
};

const counterReducer = (
  state = initialState,
  action:CounterAction
): counterState => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREASE:
      return {
        ...state,
        value: state.value - 1
      };
    case RESET_ASYNC:
      return state;

    default:
      return state;
  }
};

export default counterReducer;
