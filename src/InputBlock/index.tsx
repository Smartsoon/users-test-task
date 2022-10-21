import Input from "../components/Input";
import Button from "../components/Button";
import React, {useState} from "react";
import {IUserItem} from "../redux/reducers/usersReducer";
import {v4 as uuidv4} from "uuid";
import {setUsersListAction} from "../redux/actions/users/actions";
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../redux/store";
import {Dispatch} from "redux";
import './index.css'

const InputBlock: React.FC = () => {
    const {users} = useSelector((state: IAppState) => state.usersState);
    const dispatch = useDispatch<Dispatch<any>>()
    const [value, setValue] = useState<string>('')

    const onValueChange = (value: string) => {
        setValue(value)
    }

    const onAddClick = (value: string) => {
        if (!value) return
        const newItem: IUserItem = {
            id: uuidv4(),
            name: value
        }
        dispatch(setUsersListAction([...users, newItem]))
        setValue('')
    }

    return <div className={'controls'}>
        <Input label={'Add User'}
               value={value}
               onChange={onValueChange}/>
        <Button color={'success'}
                iconType={'add'}
                onClick={() => {
                    onAddClick(value)
                }}
        />
    </div>
}

export default InputBlock