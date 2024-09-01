'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { DepartmentMock } from '../mock/departmentMock';

interface IStepper {
    activeStep: number
}

export default function StepperMenuList({...props}: IStepper) {
    const questions = DepartmentMock.questions;
    return (
        <Box sx={{maxHeight: 517, overflowY: 'scroll', overflowX: 'hidden' }}>
            <Stepper activeStep={props.activeStep} orientation="vertical">
                {questions.map((question) => (
                    <Step key={question.id}>
                        <StepLabel className='label-step'>
                            {question.title}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
