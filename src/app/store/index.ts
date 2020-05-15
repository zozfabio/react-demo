import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { UsersState } from './ducks/users/types';

export interface AppState {
    users: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
