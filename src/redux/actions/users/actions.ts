import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {IUserItem, IUsersState} from "../../reducers/usersReducer";
import {UsersActionTypes} from "./actionTypes";

export interface ISetUsersListAction {
    type: UsersActionTypes.SET_USERS;
    users: IUserItem[];
}

export type UsersActions = ISetUsersListAction;

export const setUsersListAction: ActionCreator<ThunkAction<any, IUsersState, null, ISetUsersListAction>> = (users: IUserItem[]) =>
    (dispatch: Dispatch) => dispatch({type: UsersActionTypes.SET_USERS, users: users})