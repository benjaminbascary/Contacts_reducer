import { user } from "../types/user";
import { UsersReducerAction } from "../types/usersReducerTypes";


class UsersReducer {
    private state: user[] = []
    
    getUsers(action : UsersReducerAction ) {
        switch(action.type) {
            case "addUser":
                return [...this.state, action.payload];
        }
    }

    private deleteUser(id: string) {

    }

}

export const usersReducer = new UsersReducer;