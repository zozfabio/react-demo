import { AnyAction, Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState = {
    data: [],
};

const reducer: Reducer<UsersState> = (state: UsersState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case UsersTypes.FIND_ALL:
            return { ...state };
        case UsersTypes.ALL_LOADED:
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return state;
    }
};

export default reducer;
