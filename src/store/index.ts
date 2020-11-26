import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSagas } from './counter.sagas';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSagas);
