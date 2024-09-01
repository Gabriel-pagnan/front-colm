import { NotificationsActiveRounded, NotificationsRounded } from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Colors } from '../../../themes/Colors';
// import { toast } from 'react-toastify';
// import { IListingProduct, ProdService } from '../../../services/produtos/ProdService';
// import { useAuthContext } from '../../../context/AuthContext';

export const Alert: React.FC = () => {
    const [count, setCount] = useState(0);
    // const [rows, setRows] = useState<IListingProduct[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const { userId } = useAuthContext();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // useEffect(() => {
    //     ProdService.getLimit(userId)
    //         .then((result) => {
    //             if (result instanceof Error) {
    //                 toast.error(result.message);
    //             } else {
    //                 setRows(result.data);
    //                 setCount(result.fullCount);
    //             }
    //         });
    // }, [count]);

    return (
        <>
            <IconButton
                size='large'
                sx={{ color: Colors.grayPrimary }}
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>

                <Tooltip title='Alerta' arrow>
                    <Badge badgeContent={count} color="error">
                        {count === 0 ? <NotificationsRounded /> : <NotificationsActiveRounded />}
                    </Badge>
                </Tooltip>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1, },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} >

                {/* {rows.map((row) => (
                    <MenuItem key={row.id} sx={{ p: 2 }}>
                        <Typography>
                            O produto {row.nome} apresenta estoque baixo: {row.quantidade} {row.tipo}
                        </Typography>
                    </MenuItem>
                ))} */}
            </Menu>
        </>
    );
};