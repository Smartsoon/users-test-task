import { applyMiddleware, combineReducers, Store } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import {IUsersState, UsersReducer} from './reducers/usersReducer';

export interface IAppState {
	usersState: IUsersState
}

const reducerFuncs = {
	usersState: UsersReducer
}

const usersReducer = combineReducers<IAppState>(reducerFuncs);

export default function configureStore(): Store<IAppState, any> {
	return createStore(usersReducer, undefined, applyMiddleware(thunk));
}

export const store = configureStore();