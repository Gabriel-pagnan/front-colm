import { Colors } from "../themes/Colors";
import HomeOutlinedIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import SignpostRoundedIcon from '@mui/icons-material/Signpost'
import { IDrawerOption } from "../context/DrawerContext";

export const DrawerOptions: IDrawerOption[]  = [
    {
        label: 'Home',
        icon: <HomeOutlinedIcon sx={{width: 25, height: 25, color: Colors.white}} />,
        path: '/',
    },
    {
        label: 'Usuário',
        icon: <PeopleOutlineIcon sx={{width: 25, height: 25, color: Colors.white}} />,
        path: '/user'
    },
    {
        label: 'Departamento',
        icon: <SignpostRoundedIcon sx={{width: 25, height: 25, color: Colors.white}} />,
        path: '/department'
    },
    {
        label: 'GitHub',
        icon: <GitHubIcon sx={{width: 25, height: 25, color: Colors.white}} />,
        path: ''
    },
];