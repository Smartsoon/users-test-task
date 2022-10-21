import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import User from "./components/User";
import { IAppState } from './redux/store';
import {setUsersListAction} from "./redux/actions/users/actions";
import {Dispatch } from 'redux';
import InputBlock from "./InputBlock";


function App() {
    const {users} = useSelector((state: IAppState) => state.usersState);
    const dispatch = useDispatch<Dispatch<any>>()

    const onDeleteClick = (id: string) => {
        const updatedUsers = users.filter(user => user.id !== id)
        dispatch(setUsersListAction(updatedUsers))
    }

    const onEditEndClick = (id: string, changedValue: string) => {
        if (!changedValue) return
        const updatedUsers = users.map(user => {
            if (user.id === id) {
                return {
                    ...user,
                    name: changedValue
                }
            } else {
                return user
            }
        })
        dispatch(setUsersListAction(updatedUsers))
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <div className={'wrapper__user-list'}>
                    {users.map((user) => {
                        return <React.Fragment key={user.id}>
                            <User id={user.id}
                                  name={user.name}
                                  onDeleteClick={onDeleteClick}
                                  onEditEndClick={onEditEndClick}/>
                        </React.Fragment>
                    })}
                </div>
                <InputBlock/>
            </div>
        </div>
  );
}

export default App;
