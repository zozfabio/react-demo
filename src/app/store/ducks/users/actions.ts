import { action } from 'typesafe-actions';
import { User, UsersTypes } from './types';

export const findAll = () => action(UsersTypes.FIND_ALL);
export const allLoaded = (data: User[]) => action(UsersTypes.ALL_LOADED, { data });
