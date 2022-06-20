import { user } from "./user"

export type usersReducerAction = {
    type : 'getAllUsers' | 'updateUser' | 'deleteUser' | 'addUser',
    payload: user;
}
