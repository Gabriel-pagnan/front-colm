'use client'
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Grid, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { Colors } from '../shared/themes/Colors';
import AddIcon from '@mui/icons-material/Add';
import { DepartmentType } from '../shared/types/departmentType';
import { useEffect, useState } from 'react';
import { ListQuestions } from '../shared/components/listQuestions';
import { styleBtnDanger, styleBtnPrimary, styleBtnSuccess } from '../shared/themes/styleButton';
import ArrowTop from '../shared/components/buttons/arrowTop';
import { Modal } from '../shared/components/Modal';
import { DrawerBar } from '../shared/components/drawer/Drawer';
import { useDrawerContext } from '../shared/context/DrawerContext';
import { DrawerOptions } from '../shared/model/drawerOptonsModel';
import axios from 'axios';
import { URL_DEPARTMENT_ID } from '../shared/constants/urls';

export const Departments = () => {
    const { setDrawerOption } = useDrawerContext();
    const [department, setDepartment] = useState<DepartmentType>({
        id: 0,
        name: '',
        description: '',
        questions: [],
    });
    const [open, setOpen] = React.useState<boolean>(false);

    const findDepartment = async () => {
        return await axios.get(URL_DEPARTMENT_ID).then((result) => {
            if (result) {
                setDepartment(result.data);
            }
        });
    }

    useEffect(() => {
        findDepartment();
        setDrawerOption(DrawerOptions);
    }, [setDrawerOption, department]);

    const showModal = () => setOpen(true);
    const hideModal = () => setOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDepartment(prev=> ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <DrawerBar title={`Setor de ${department?.name || ''}`}>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box mt={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color={Colors.grayPrimary} variant="h5" component="div">
                                Departamento
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='filled'
                                fullWidth
                                label='Nome*'
                                name='name'
                                value={department?.name || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                rows={4}
                                multiline
                                fullWidth
                                variant='filled'
                                label='Descrição*'
                                name='description'
                                value={department?.description || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid container spacing={3} mt={1} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Button sx={styleBtnSuccess} variant="contained" color='success'>
                                    Atualizar
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button sx={styleBtnDanger} variant="contained" color='error'>
                                    Deletar
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography color={Colors.grayPrimary} variant="h5" component="div">
                                Questionário
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <ListQuestions questions={department?.questions || []} />
                        </Grid>
                    </Grid>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Button
                            sx={styleBtnPrimary}
                            variant="contained"
                            color='primary'
                            startIcon={<AddIcon />}
                            onClick={showModal}
                        >
                            Nova questão
                        </Button>
                    </Box>
                </Box>
                <ArrowTop />
            </Container>
            <Modal open={open} onClose={hideModal} title='Nova questão'>
                <Box mt={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                fullWidth
                                variant='filled'
                                label='Titulo*'
                                name='title'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                rows={4}
                                multiline
                                fullWidth
                                variant='filled'
                                label='Descriçao*'
                                name='description'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant='filled'
                                label='Resposta*'
                                name='response'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid container spacing={3} mt={1} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button sx={styleBtnDanger} variant="contained" color='error' onClick={hideModal}>
                                    Cancelar
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button sx={styleBtnPrimary} variant="contained" color='primary'>
                                    Salvar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </DrawerBar>
    );
}

document.title = 'Setores';