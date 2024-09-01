import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog  } from '@mui/material';

interface IDialog {
    text: string;
    label: string;
    title?: string;
    open: boolean;
    close: () => void
}

export const DialogModal = ({ ...props }: IDialog) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{}}
        >
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText maxWidth={300} align='center' variant='h5' id="alert-dialog-description">
                    {props.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'center', p: 2}}>
                <Button onClick={props.close} variant='contained' sx={{borderRadius: 20}} autoFocus>
                    {props.label}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
