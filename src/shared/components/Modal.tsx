import { Dialog, DialogContent, DialogProps, DialogTitle, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

interface IModal extends DialogProps {
    open: boolean,
    title?: string,
    children: React.ReactNode
}

export const Modal = ({ open, children, title, ...propsModal }: IModal) => {
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog
            open={open}
            // TransitionComponent={Transition}
            // keepMounted
            {...propsModal}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}  
            </DialogContent>
        </Dialog>
    )
}
