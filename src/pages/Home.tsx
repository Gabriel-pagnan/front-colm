import React from 'react'
import { DrawerBar } from '../shared/components/drawer/Drawer'
import { useDrawerContext } from '../shared/context/DrawerContext';
import { DrawerOptions } from '../shared/model/drawerOptonsModel';
import { Grid } from '@mui/material';
import { Card } from '../shared/components/Card';
import { PathEnum } from '../shared/enums/paths.enum';
import { Colors } from '../shared/themes/Colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HistoryIcon from '@mui/icons-material/History';

export const Home = () => {
    const { setDrawerOption } = useDrawerContext();
    const user = 'Admin'
    React.useEffect(() => {
        setDrawerOption(DrawerOptions);
    }, [setDrawerOption]);
    return (
        <DrawerBar title={`Olá, ${user}`}>
            <Grid m={3} container spacing={3}>
                <Grid item xs={3} sx={{minHeight: '150px'}}>
                    <Card 
                        to={PathEnum.QUESTIONARY}
                        title='Responder questionário'
                        icon={<AutoStoriesIcon fontSize='large' sx={{color: Colors.blue600}}/>}
                    />
                </Grid>
                <Grid item xs={3} sx={{minHeight: '150px'}}>
                    <Card 
                        to={PathEnum.RESULT}
                        title='Visualizar Historíco'
                        icon={<HistoryIcon fontSize='large' sx={{color: Colors.blue600}}/>}
                    />
                </Grid>
            </Grid>
        </DrawerBar>
    )
}

document.title = 'Dashboard';