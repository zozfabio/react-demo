import { all, takeLatest } from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { asyncFindAll } from './users/sagas';

export default function* rootSaga() {
    return yield all([takeLatest(UsersTypes.FIND_ALL, asyncFindAll)]);
}
