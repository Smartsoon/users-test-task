import {Reducer} from "redux";
import {UsersActionTypes} from "../actions/users/actionTypes";
import { UsersActions } from "../actions/users/actions";

export interface IUserItem {
    id: string
    name: string
}
export interface IUsersState {
    users: IUserItem[]
}

const usersState: IUsersState = {
    users: []
};

export const UsersReducer: Reducer<IUsersState, UsersActions> = (
    state = usersState,
    action
) => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        default:
            return state;
    }
};