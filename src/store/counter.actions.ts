import {
  INCREASE, DECREASE, CounterAction, RESET_ASYNC
} from './counter.types';

export const increment = ():CounterAction => ({
  type: INCREASE
});

export const decrement = ():CounterAction => ({
  type: DECREASE
});

export const resetAsyncNumber = ():CounterAction => ({
  type: RESET_ASYNC
});

