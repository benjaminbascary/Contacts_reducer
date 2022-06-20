import { user } from "./user"

export type usersReducerAction = {
    type : 'addUser' | 'getAllUsers',
    payload: user;
}
