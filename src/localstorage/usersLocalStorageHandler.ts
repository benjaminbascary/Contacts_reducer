import { user } from "../types/user";

class UsersLocalStorageHandler {

    getUsers(): [] {
        const users = localStorage.getItem('users-reducer');
        if (users) {
            return JSON.parse(users);
        } else {
            return [];
        }
    }
    
    setUsers(users: user[]) {
        localStorage.setItem('users-reducer', JSON.stringify(users));
    }
}

export const localStorageUsers = new UsersLocalStorageHandler();
