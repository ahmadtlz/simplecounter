export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET_ASYNC = 'RESET_ASYNC';

export interface counterState {
  value: number
}

interface IncreaseAction {
  type: typeof INCREASE
}

interface DecreaseAction {
  type: typeof DECREASE
}

interface ResetAsyncAction {
  type:typeof RESET_ASYNC
}

export type CounterAction = IncreaseAction | DecreaseAction | ResetAsyncAction;
