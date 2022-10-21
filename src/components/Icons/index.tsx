import React from "react";
import {Delete, Edit, Add, Save} from '@mui/icons-material';
export type IconComponentNames =
    'delete' |
    'edit' |
    'add' |
    'save'
    ;

export interface IIconComponentProps {
    name: IconComponentNames
}

const IconComponent: React.FC<IIconComponentProps> = (props) => {
    const { name } = props;

    switch (name) {
        case 'delete':
            return <Delete />;
        case 'edit':
            return <Edit />;
        case 'add':
            return <Add />;
        case 'save':
            return <Save />;
        default:
            return <></>;
    }
}

export default IconComponent;