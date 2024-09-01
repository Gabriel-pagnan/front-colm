import React from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { IconButton } from '@mui/material';

export default function ArrowTop() {
    const handleScroll = () => {
        return window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <IconButton sx={{
            position: 'absolute',
            right: 0,
            m: 1,
        }} onClick={handleScroll}>
            <KeyboardArrowUpRoundedIcon sx={{width: 50, height: 50}}/>
        </IconButton>
    )
}
