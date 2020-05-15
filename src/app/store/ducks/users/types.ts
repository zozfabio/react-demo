export enum UsersTypes {
    FIND_ALL = '@users/FIND_ALL',
    ALL_LOADED = '@users/ALL_LOADED',
}

export interface User {
    id: number;
    name: string;
}

export interface UsersState {
    readonly data: User[];
}
