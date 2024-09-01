import React from 'react';
import { Button } from '@mui/material';
import { styleBtnPrimary } from '../../themes/styleButton';

interface IPaginationBtn {
    title?: string,
    variant: "contained" | "text" | "outlined",
    endIcon?: React.ReactNode,
    startIcon?: React.ReactNode,
    event: () => void,
    label: string
}

export default function ButtonPagination({...props}: IPaginationBtn) {
    return (
        <Button
            title={props.title}
            variant={props.variant}
            endIcon={props.endIcon}
            startIcon={props.startIcon}
            onClick={props.event}
            sx={{
                borderRadius: 10,
                background: 'transparent',
                px: 3,
            }}>
            {props.label}
        </Button>
    )
}
