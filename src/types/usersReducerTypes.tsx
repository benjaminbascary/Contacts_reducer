import { user } from "./user"

export type usersReducerAction = {
    type : 'addUser' | 'deleteUser',
    payload: user;
}
