import { user } from "../types/user";
import { usersReducerAction } from "../types/usersReducerTypes";

export const usersReducer = (state: user[], action : usersReducerAction): user[] => {
    switch(action.type) {
        case "addUser":
            return [...state, action.payload];
            
        case "getAllUsers":
            return state;
            
        default:
            return state;
    }
}
