import React from "react";
import IconButton from '@mui/material/IconButton';
import IconComponent, {IconComponentNames} from "../Icons";

type ColorTypes =  "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined

export interface IButton {
    iconType: IconComponentNames
    onClick: (event: React.MouseEvent) => void
    color: ColorTypes
}

const Button: React.FC<IButton> = ({iconType, onClick, color}) => {
    return (
        <IconButton aria-label={iconType} color={color} onClick={onClick}>
            <IconComponent name={iconType}/>
        </IconButton>
    )
}

export default Button