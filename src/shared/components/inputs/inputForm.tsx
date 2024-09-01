import { InputBase, InputProps, Paper } from '@mui/material';
import React from 'react';
import { Colors } from '../../themes/Colors';

interface InputFormProps extends InputProps {
    placeholder: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    type: string
}

export default function InputForm({ 
    placeholder, 
    startIcon, 
    endIcon,
    type,
    ...inputProps 
}: InputFormProps) {
    const styleInput = {
        p: 1,
        display: 'flex',
        alignItems: 'center',
        background: Colors.gray200,
        boxShadow: 'none',
        borderRadius: '7px'
    }

    return (
        <Paper component="form" sx={styleInput}>
            {startIcon && (startIcon)}
            <InputBase type={type} sx={{ ml: 1, flex: 1 }} placeholder={placeholder} {...inputProps} />
            {endIcon && (endIcon)}
        </Paper>
    )
}
