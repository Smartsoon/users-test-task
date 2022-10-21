import React, {SyntheticEvent} from 'react'
import {TextField} from "@mui/material";

export interface IInput {
    label: string
    value: string
    onChange: (value: string) => void
    variant?: 'outlined' | 'filled' | 'standard'
}

const Input: React.FC<IInput> = ({value, label, onChange, variant = 'outlined'}) => {

    const onValueChange = (event: React.ChangeEvent<any>) => {
        onChange(event.target.value)
    }

    return <TextField id="outlined-basic"
                      label={label}
                      variant={variant}
                      value={value} onChange={onValueChange}/>
}

export default Input