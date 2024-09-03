import { useState } from 'react';
import { Box, Button, Container, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
import InputForm from '../shared/components/inputs/inputForm';
import { Colors } from '../shared/themes/Colors';
import { backgroundImage } from '../shared/themes/styleBackground';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Visibility } from '@mui/icons-material';
import { styleBtnPrimary } from '../shared/themes/styleButton';
import Radio from '@mui/material/Radio';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';


export default function Register() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box sx={{ ...backgroundImage, transform: 'rotate(0deg)' }}>
            </Box>
            <Container sx={{ minWidth: '60%', justifyContent: 'center', display: 'flex' }}>
                <Grid container spacing={3} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid item xs={12} lg={7} textAlign={'end'}>
                        <Typography variant='body1' color={Colors.redPrimary}>
                            * campos obrigatorios
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <InputForm
                            startIcon={<PersonIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='*Nome completo'
                            type='text'
                        />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <InputForm
                            startIcon={<MailIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='*E-mail'
                            type='text'
                        />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <InputForm
                            startIcon={<StoreIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='*Empresa'
                            type='text'
                        />
                    </Grid>
                    <Grid item xs={12} lg={7} mt={1}>
                        <InputForm
                            startIcon={<LockIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='*Senha'
                            type={showPassword ? 'text' : 'password'}
                            endIcon={
                                <IconButton size='medium' onClick={handleShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={7} mt={1} sx={{ position: 'relative' }}>
                        <InputForm
                            startIcon={<LockIcon sx={{ color: Colors.grayPrimary }} />}
                            placeholder='*Repetir senha'
                            type={showPassword ? 'text' : 'password'}
                            endIcon={
                                <IconButton size='medium' onClick={handleShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            }
                        />
                    </Grid>
                    <Grid textAlign={'end'} item xs={12} lg={7}>
                        <FormControlLabel value="therns" color={Colors.bluePrimary} control={<Radio />} label="Concordar com os termos" />
                    </Grid>
                    <Grid item xs={12} lg={7} mt={4}>
                        <Button sx={{ ...styleBtnPrimary, width: '100%', p: '12px' }} variant="contained" >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}