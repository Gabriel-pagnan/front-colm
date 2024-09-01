import React from 'react';
import { Fab, Typography } from '@mui/material'
import { styleBtnOptions, styleLabelOptions } from '../../themes/styleOption';

interface IOptions {
    option: string,
    label: string,
    color: string,
    onSelect: (answer: string) => void,
    isSelected: boolean;
}

export default function Options({ option, label, color, onSelect, isSelected }: IOptions) {    
    return (
        <Fab 
            variant="extended"
            onClick={() => onSelect(option)}
            sx={{
                ...styleBtnOptions,
                background: isSelected ? color : '#c2c2c2',
            }}>
            <Typography
                sx={{
                    ...styleLabelOptions,
                    backgroundColor: `${color}`
                }}>
                {option}
            </Typography>
            {label}
        </Fab>
    )
}
