import { call, put } from 'redux-saga/effects';
import { User, UsersTypes } from './types';
import { findAll } from '../../../services/users';

export function* asyncFindAll() {
    try {
        const data: User[] = yield call(findAll);
        yield put({ type: UsersTypes.ALL_LOADED, payload: { data } });
    } catch (err) {
        console.error(`Error fetching users: ${err}`);
    }
}
