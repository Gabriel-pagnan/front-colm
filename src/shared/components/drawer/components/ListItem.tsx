import { ListItemButton, ListItemIcon, styled, Typography } from '@mui/material';
import { Colors } from '../../../themes/Colors';
import { useLocation } from 'react-router-dom';

interface IListItemLinkProps {
    to?: string;
    icon: JSX.Element;
    label: string;
    title: string
}

const CustomListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
    borderLeft: selected ? '5px solid white' : 'none',
    background: selected ? Colors.white : theme.palette.action.hover,
    color: selected ? 'black' : theme.palette.action.hover,
    '&:hover': {
        backgroundColor: selected ? 'white' : theme.palette.action.hover,
    },
}));

export const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label }) => {
    const location = useLocation();
    const pathname = location.pathname;
    
    const gitUrl = 'https://github.com/Gabriel-pagnan/midit-colm'
    return (
        <a href={to ? to : gitUrl}>
            <CustomListItemButton selected={pathname === to} title={label} sx={{ p: 2 }}>
                <ListItemIcon sx={{minWidth: 47}}>
                    {icon}
                </ListItemIcon>
                <Typography variant='inherit' color={Colors.gray100}>
                    {label}
                </Typography>
            </CustomListItemButton>
        </a>
    );
};