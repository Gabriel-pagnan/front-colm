'use client'
import React, { useEffect, useState } from 'react'
import { DrawerBar } from '../shared/components/drawer/Drawer'
import StepperMenuList from '../shared/components/StepperMenuList'
import { Box, Tooltip, Typography } from '@mui/material';
import { WestRounded } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { Colors } from '../shared/themes/Colors';
import Options from '../shared/components/buttons/btnOptions';
import { optionsModel } from '../shared/model/optionsModel';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import ButtonPagination from '../shared/components/buttons/pagination';
import { DialogModal } from '../shared/components/Dialog';
import { useNavigate } from 'react-router-dom';
import { PathEnum } from '../shared/enums/paths.enum';
import axios from 'axios';
import { URL_DEPARTMENT_ID } from '../shared/constants/urls';
import { DepartmentType } from '../shared/types/departmentType';
import { QuestionType } from '../shared/types/questionType';

export interface ISelection {
    yes: boolean;
    perhaps: boolean;
    no: boolean;
    questionId: number;
    title: string
}

export const Questionary = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [selections, setSelections] = useState<ISelection[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [department, setDepartment] = useState<DepartmentType>({
        id: 0,
        name: '',
        description: '',
        questions: [],
    });

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                const result = await axios.get(URL_DEPARTMENT_ID);
                if (result && result.data) {
                    setDepartment(result.data);
                    setQuestions(result.data.questions);
                }
            } catch (error) {
                console.error('Error fetching department:', error);
            }
        };

        fetchDepartment();
    }, []);

    const question = questions[currentIndex] || null;

    
    const handleNext = () => {
        if (!selections[question.id] || !selectedOption) {
            setOpen(!open);
            return;
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
        } else {
            const selectionsArray = Object.values(selections);
            navigate(PathEnum.RESULT, { state: { selections: selectionsArray } });
        }
    };

    const handleSelect = (answer: string) => {
        const newSelection: ISelection = {
            yes: answer === 'A',
            perhaps: answer === 'B',
            no: answer === 'C',
            questionId: question.id,
            title: question.title
        };

        setSelectedOption(answer);
        setSelections(prevSelections => ({
            ...prevSelections,
            [question.id]: newSelection
        }));
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    console.log(department);

    return (
        <DrawerBar
            title='Questionário do setor'
            stepperList={<StepperMenuList activeStep={currentIndex} />}
        >
            <Box component='main' display={'flex'} flexDirection={'column'} p={5} gap={3}>
                {/* title */}
                <Box gap={5} display={'flex'} alignItems={'end'}>
                    <Tooltip title="Titulo da questão">
                        <InfoIcon fontSize='large' sx={{ color: Colors.grayPrimary }} />
                    </Tooltip>
                    <Typography variant='h5' fontStyle={'italic'} fontWeight='300' color={Colors.bluePrimary}>
                        {question?.title || ''}
                    </Typography>
                </Box>

                {/* decription */}
                <Box gap={5} display={'flex'} alignItems={'start'}>
                    <Tooltip title="Descrição da questão">
                        <InfoIcon fontSize='large' sx={{ color: Colors.grayPrimary }} />
                    </Tooltip>
                    <Typography width='80%' variant='h6' fontWeight='200' color={Colors.gray800} >
                        {question?.description || ''}
                    </Typography>
                </Box>

                {/* response */}
                <Box gap={5} display={'flex'} alignItems={'start'}>
                    <Tooltip title="Resposta da questão">
                        <InfoIcon fontSize='large' sx={{ color: Colors.grayPrimary }} />
                    </Tooltip>
                    <Typography width='80%' fontSize={18} color={Colors.grayPrimary}>
                        Resposta: {question?.response || ''}
                    </Typography>
                </Box>

                {/* options */}
                <Box mt={3} ml={10} display='flex' flexDirection='column' alignItems='flex-start' gap={3}>
                    {optionsModel.map((opt, idx) => (
                        <Options
                            key={idx}
                            option={opt.option}
                            label={opt.label}
                            color={opt.color}
                            onSelect={handleSelect}
                            isSelected={selectedOption === opt.option}
                        />
                    ))}
                </Box>

                {/* btn */}
                <Box mt={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    {currentIndex > 0 && (
                        <ButtonPagination
                            event={handleBack}
                            startIcon={<WestRounded />}
                            label='Voltar'
                            variant='outlined'
                        />
                    )}

                    <ButtonPagination
                        event={handleNext}
                        endIcon={<EastRoundedIcon />}
                        label={currentIndex < (questions.length - 1) ? 'Proxímo' : 'Finalizar'}
                        variant='outlined'
                    />
                </Box>
            </Box>
            <DialogModal
                text='Selecione uma opção para continuar'
                label='OK'
                close={() => setOpen(!open)}
                open={open}
            />
        </DrawerBar>
    )
}