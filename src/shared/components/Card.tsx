import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Colors } from '../themes/Colors';

interface ICard {
    title: string,
    subtitle?: string
    icon?: React.ReactNode,
    to?: string
}

const cardStyle = {
    backgroundColor: Colors.white,
    borderRadius: '6px',
    boxShadow: '0px 10px 36px -17px rgba(0,0,0,0.1);',
    minHeight: 130,
    borderLeft: `7px solid ${Colors.blue600}`,
    display: 'flex',
    justifyContent:'center',
    cursor: 'pointer'
}

export const Card = ({ ...props }: ICard) => {
    const handleNavigateTo = () => {
        if (props.to) {
            const fullUrl = window.location.origin + props.to;
            window.open(fullUrl, '_blank');
        }
    }

    return (
        <Box component={Paper} onClick={handleNavigateTo} sx={cardStyle}>
            <Box 
                gap={2} 
                p={'15px'}
                width={'100%'}
                display={'flex'} 
                alignItems={'start'} 
                justifyContent={'center'}
                flexDirection={'column'}
            >
                {props.icon}
                <Typography color={'#254f83'} fontStyle={'italic'} fontSize={'20px'}>
                    {props.title}
                </Typography>
            </Box>
        </Box>
    )
}
