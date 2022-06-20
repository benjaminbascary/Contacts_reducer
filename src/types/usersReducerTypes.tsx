import { user } from "./user"

export type UsersReducerAction = {
    type : 'getAllUsers' | 'updateUser' | 'deleteUser' | 'addUser',
    payload: user;
}