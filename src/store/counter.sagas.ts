import {
  delay, put, all, select, CallEffect, PutEffect, SelectEffect, takeLatest, ForkEffect, AllEffect
} from 'redux-saga/effects';
import { RootState } from './root-reducer';
import { increment, decrement } from './counter.actions';
import { CounterAction, RESET_ASYNC } from './counter.types';

export function* resetAsync():Generator<
SelectEffect | CallEffect<true> | PutEffect<CounterAction>, void, RootState> {
  while (true) {
    const { counter } = yield select();
    const temp = counter.value;

    if (temp === 0) return;

    if (temp >= 0) {
      yield delay(500);
      yield put(decrement());
    } else if (temp <= 0) {
      yield delay(500);
      yield put(increment());
    }
  }
}

function* resetSaga():Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(RESET_ASYNC, resetAsync);
}
export function* rootSagas(): Generator<
 AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
  yield all([resetSaga()]);
}
