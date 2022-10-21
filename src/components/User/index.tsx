import React, {useEffect, useState} from 'react'
import './index.css'
import Button from "../Button";
import Input from "../Input";
import {truncateString} from "../../utils/stringUtils";
import {Tooltip} from "@mui/material";

export interface IUser {
    id: string
    name: string
    onDeleteClick: (id: string) => void
    onEditEndClick: (id: string, value: string) => void
}

const User: React.FC<IUser> = ({id, name, onDeleteClick, onEditEndClick}) => {
    const [isEditMode, setIEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(name)

    console.log('render', id)

    const onEditClick = () => {
        setIEditMode(true)
    }

    const onSaveClick = () => {
        onEditEndClick(id, value)
        setIEditMode(false)
    }

    return (
        <div className={'user'}>
            {
                !isEditMode ?
                    <Tooltip title={name.length >= 25 ? name : undefined}>
                        <span>
                            {truncateString(name, 25)}
                        </span>
                    </Tooltip> :
                    <Input label={''}
                           variant={'standard'}
                           value={value}
                           onChange={setValue}/>
            }
            <div className={'user__buttons'}>
                {
                    isEditMode ?
                        <Button iconType={'save'}
                                onClick={onSaveClick}
                                color={'success'}/> :
                        <Button iconType={'edit'}
                                onClick={onEditClick}
                                color={'info'}/>
                }
                <Button iconType={'delete'} onClick={() => onDeleteClick(id)} color={'error'}/>
            </div>
        </div>
    )
}

export default User;