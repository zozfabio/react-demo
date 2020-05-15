import { User } from '../store/ducks/users/types';

export const findAll = () => {
    return fetch('/api/users')
        .then((res: Response) => res.json())
        .then((users: User[]) => users);
};
