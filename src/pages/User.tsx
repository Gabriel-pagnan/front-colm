import React, { SetStateAction, useState } from 'react'
import { Box, Container, Grid, IconButton, Button, TextField, Toolbar, Typography, InputAdornment, Tooltip } from '@mui/material';
import { Colors } from '../shared/themes/Colors';
import { Select } from '../shared/components/Select';
import { PermissionMock } from '../shared/mock/permissionMock';
import { randomPassword } from '../shared/utils/randonPassword';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styleBtnSuccess } from '../shared/themes/styleButton';
import { DrawerBar } from '../shared/components/drawer/Drawer';
import { DrawerOptions } from '../shared/model/drawerOptonsModel';
import { useDrawerContext } from '../shared/context/DrawerContext';
import { UserType } from '../shared/types/userType';
import axios from 'axios';
import { URL_USER } from '../shared/constants/urls';
import { DialogModal } from '../shared/components/Dialog';

export const User = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { setDrawerOption } = useDrawerContext();
    const [targetPassword, setTargetPassword] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>('');
    const [user, setUser] = useState<UserType>();

    const findUser = async () => {
        return await axios.get(URL_USER).then((result) => {
            setUser(result.data);
        });
    }

    React.useEffect(() => {
        findUser();
        setDrawerOption(DrawerOptions);
    }, [setDrawerOption]);

    const handleChangeSelect = (event: SetStateAction<any>) => {
        setUser(event.target.value);
    };

    const showTargetPassword = () => setTargetPassword((show) => {
        setNewPassword('');
        return !show
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRandomPassword = () => {
        const newPassword = randomPassword();
        setNewPassword(newPassword);
    };

    const handleCopyPassword = () => {
        if (newPassword) {
            navigator.clipboard.writeText(newPassword);
        }
    };

    const handleSave = async () => {
        await axios.put(URL_USER, user).then((result) => {
            if (result) {
                setShowModal(!showModal);
            }
        })
    }

    return (
        <DrawerBar title={user?.name || ''}>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box mt={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography color={Colors.grayPrimary} variant="h5" component="div">
                                Dados
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='filled'
                                fullWidth
                                label='Nome*'
                                name='name'
                                value={user?.name || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='filled'
                                fullWidth
                                label='E-mail*'
                                name='email'
                                value={user?.email || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={8}>
                            <Select
                                options={PermissionMock}
                                label='Permissão'
                                value={user?.role || ''}
                                onChange={handleChangeSelect}
                                autoWidth={false} multiple={false} native={false} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Button sx={{ width: '100%', p: 2 }} variant="contained" onClick={showTargetPassword}>
                                Trocar senha
                            </Button>
                        </Grid>
                        {targetPassword && (
                            <>
                                <Grid item xs={12} md={4} lg={8}>
                                    <TextField
                                        variant='filled'
                                        fullWidth
                                        label='Nova senha*'
                                        name='password'
                                        value={newPassword ? newPassword : ''}
                                        onChange={handleChange}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Tooltip placement='bottom' title='Clique para copiar a nova senha' arrow>
                                                        <IconButton
                                                            aria-label="copiar senha"
                                                            onClick={handleCopyPassword}
                                                            edge="end"
                                                        >
                                                            <ContentCopyIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={5} lg={5}>
                                    <Button
                                        variant="contained"
                                        onClick={handleRandomPassword}
                                        sx={{ ...styleBtnSuccess }}
                                        color='success'
                                    >
                                        Gerar senha
                                    </Button>
                                </Grid>
                            </>
                        )}

                        <Grid container spacing={3} mt={4} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Button onClick={handleSave} sx={styleBtnSuccess} variant="contained" color='success'>
                                    Atualizar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <DialogModal
                label='OK'
                open={showModal}
                text='Usuário alterado!'
                close={() => setShowModal(!showModal)}
            />
        </DrawerBar>
    )
}