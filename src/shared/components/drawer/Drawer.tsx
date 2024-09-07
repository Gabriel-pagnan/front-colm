'use client'
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Box, List, Toolbar, Typography, IconButton, CssBaseline, Tooltip, Button } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Menu } from '@mui/icons-material';
import { useDrawerContext } from '../../context/DrawerContext';
import { Alert } from './components/Alert';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
// import { useAppThemeContext, useDrawerContext } from '../../context';
import { ListItemLink } from './components/ListItem';
import { Colors } from '../../themes/Colors';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { Logo } from '../Logo';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: Colors.blue300,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    backgroundColor: Colors.blue300,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: Colors.blue300,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    height: '70px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        height: '70px',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface ISideBarProps {
    children: React.ReactNode,
    title?: string,
    stepperList?: React.ReactNode,
}

export const DrawerBar: React.FC<ISideBarProps> = ({ stepperList, children, title }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { logout } = useAuthContext();
    const [open, setOpen] = React.useState(true);
    const { toggleDrawerOpen, drawerOptions } = useDrawerContext();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={1} sx={{ 
                background: Colors.white,
                boxShadow: '0px 8px 22px -5px rgba(0,0,0,0.1)'
            }}>
                <Toolbar >
                    <Tooltip title='Menu' arrow>
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ marginRight: 5, ...(open && { display: 'none' }), }} >
                            <Menu />
                        </IconButton>
                    </Tooltip>

                    <Typography
                        color={Colors.grayPrimary}
                        variant="h5" noWrap
                        component="div"
                        margin={3}
                        width={'100%'}>
                        {title}
                    </Typography>

                    <Alert key={1} />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} sx={{ background: Colors.blue300, }}>
                <DrawerHeader sx={{ pt: 2, gap: 3 }}>
                    <Logo />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' 
                            ? <ChevronRightIcon sx={{color: Colors.white}}/> 
                            : <ChevronLeftIcon sx={{color: Colors.white}}/>
                        }
                    </IconButton>
                </DrawerHeader>

                {drawerOptions.length ?
                    <List sx={{ height: 550, backgroundColor: Colors.blue300}}>
                        {drawerOptions.map((drawerOption, index) => (
                            <ListItemLink
                                key={index}
                                to={drawerOption.path || ''}
                                icon={drawerOption.icon}
                                label={drawerOption.label}
                                title={drawerOption.label} 
                            />
                        ))}
                    </List> :
                    <Box sx={{ height: 550, backgroundColor: Colors.blue300, marginTop: '31px', marginLeft: '19px' }}>
                        {stepperList}
                    </Box>
                }

                <Button
                    onClick={logout}
                    title='Sair'
                    variant="contained"
                    endIcon={<LogoutRoundedIcon />}
                    sx={{
                        m: 2,
                        borderRadius: 10,
                        boxShadow: 'none',
                        position: 'absolute',
                        bottom: 0,
                        minWidth: '88%'
                    }}>
                    Sair
                </Button>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};