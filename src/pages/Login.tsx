'use client'
import React, { useState } from 'react'
import { Box, Button, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import { styleBtnPrimary } from '../shared/themes/styleButton';
import MailIcon from '@mui/icons-material/Mail';
import { Colors } from '../shared/themes/Colors';
import InputForm from '../shared/components/inputs/inputForm';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Visibility } from '@mui/icons-material';
import { backgroundImage } from '../shared/themes/styleBackground';
import { useAuthContext } from '../shared/context/AuthContext';

interface ILoginProps {
    children: React.ReactNode;
}

export default function Login({ children }: ILoginProps) {
    const { isAuthenticated, login } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = () => {
        setIsLoading(true);
        setSuccess(true);
        login(email, password)
        .then(() => {
            setIsLoading(false);
        });
    };

    if (isAuthenticated) return (
        <>{children}</>
    );

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Container sx={{ minWidth: '60%', justifyContent: 'center', display: 'flex' }}>
                <Grid container spacing={3} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid item xs={12} lg={7}>
                        <Typography variant='h4' fontStyle={'italic'} color={Colors.bluePrimary}>
                            COLMEIA 360
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <InputForm
                            startIcon={<MailIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='Seu e-mail'
                            type='text'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={7} mt={1}>
                        <InputForm
                            startIcon={<LockIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='Sua senha'
                            type={showPassword ? 'text' : 'password'}
                            onChange={e => setPassword(e.target.value)}
                            endIcon={
                                <IconButton size='medium' onClick={handleShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            }
                        />
                    </Grid>
                    <Grid textAlign={'end'} item xs={12} lg={7}>
                        <Link href="#" underline='hover' fontFamily=''>Recuperar senha</Link>
                    </Grid>
                    <Grid item xs={12} lg={7} mt={4}>
                        <Button 
                            sx={{ ...styleBtnPrimary, width: '100%', p: '12px' }} variant="contained"
                            onClick={handleSubmit} 
                        >
                            Entrar
                        </Button>
                    </Grid>

                    <Grid textAlign={'center'} item xs={12} lg={7} mt={3}>
                        <Typography variant='inherit' fontFamily='' color={Colors.grayPrimary}>
                            Não possui conta?
                        </Typography>
                        <br></br>
                        <Link fontFamily='' sx={{ fontSize: '14px' }} href="/register" underline='hover'>
                            Criar conta
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={backgroundImage}>
            </Box>
        </Box>
    )
}

document.title = 'Login'