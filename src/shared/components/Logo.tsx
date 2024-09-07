import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Colors } from '../themes/Colors';

export const Logo = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
            <Avatar alt="logo" src="favicon.png" sx={{ width: 56, height: 56 }}/>
            <Typography fontSize={25} color={Colors.white}>
                COLMEIA 360
            </Typography>
        </Box>
    )
}
