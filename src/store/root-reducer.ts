import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootState=ReturnType<typeof rootReducer>

export default rootReducer;
