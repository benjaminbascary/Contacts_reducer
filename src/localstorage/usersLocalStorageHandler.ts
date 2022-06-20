import { user } from "../types/user";

class UsersLocalStorageHandler {
    getUsers() {

    }
}

export const usersLocalStorage = new UsersLocalStorageHandler();

export const initialiceUsersFromLocalStorage = () => {
    const users = localStorage.getItem('users-reducer');
    if (users) {
        return JSON.parse(users);
    } else {
        return [];
    }
}

export const setUsersIntoLocalStorage = (users: user[]) => {
    localStorage.setItem('users-reducer', JSON.stringify(users));
} 