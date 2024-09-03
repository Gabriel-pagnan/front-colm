import React, { useState } from 'react'
import { DrawerBar } from '../shared/components/drawer/Drawer';
import HexbinChart from '../shared/components/Graphic';
import { DrawerOptions } from '../shared/model/drawerOptonsModel';
import { useDrawerContext } from '../shared/context/DrawerContext';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ReturnMock } from '../shared/mock/returnMock';
import { ISelection } from './Questionary';
import { Accordion } from '../shared/components/Accordion';
import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Colors } from '../shared/themes/Colors';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

interface ReturnQuestion {
    return: string,
    title: string,
    icon: React.ReactNode,
    color: string
}

export default function Result() {
    const location = useLocation();
    const { selections } = location.state || {};
    const [returnQuestions, setReturnQuestions] = useState<ReturnQuestion[]>([]);
    const returnMock = ReturnMock;
    
    React.useEffect(() => {
        if (selections) {
            const filteredQuestions = selections
                .filter((record: ISelection) => {
                    return (record.no || record.perhaps) && returnMock.some(mock => mock.id === record.questionId);
                })
                .map((record: ISelection) => {
                    const matchingReturn = returnMock.find(mock => mock.id === record.questionId);
                    return {
                        return: matchingReturn?.return || '',
                        title: record.title,
                        icon: record.no 
                            ? <DangerousIcon sx={{mr: 2, color: Colors.redPrimary}}/>
                            : <WarningIcon sx={{mr: 2, color: Colors.yellowPrimary}}/>,
                        color: record.no
                            ? '#fdced6'
                            : '#fcf6ac'
                    };
                });

            setReturnQuestions(filteredQuestions);
        }
    }, [selections, returnMock]);

    const { setDrawerOption } = useDrawerContext();
    React.useEffect(() => {
        setDrawerOption(DrawerOptions);
    }, [setDrawerOption]);

    return (
        <DrawerBar title='Resultado'>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={4}>
                <HexbinChart data={selections} width={460} height={450} radius={50}/>
            </Box>
            <Container>
                <Box>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {returnQuestions.length > 0 && (
                            <>
                                <Grid item xs={9} textAlign={'left'}>
                                    <Box display={'flex'} alignItems={'center'} gap={2}>
                                        <TipsAndUpdatesIcon 
                                            fontSize='large' 
                                            sx={{color: Colors.greenPrimary}}
                                        /> 
                                        <Typography color={Colors.grayPrimary} variant="h5" component="div">
                                            Análise das respostas negativas
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={9}>
                                    {returnQuestions.length && (
                                        returnQuestions.map((r, idx) => (
                                            <Accordion
                                                key={idx}
                                                title={r.title}
                                                content={r.return}
                                                icon={r.icon}
                                                color={r.color}
                                            />
                                        ))
                                    )}
                                </Grid>
                            </>
                        )}

                        <Grid item xs={9} textAlign={'center'}>
                            <Button>
                                <a target='_blank' href="https://wa.me//5516991098911?text=Quero%20falar%20com%20um%20especialista" rel="noreferrer">Falar com um especialista</a>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </DrawerBar>
    )
}
