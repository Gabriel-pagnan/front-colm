import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { QuestionType } from '../types/questionType'
import { Colors } from '../themes/Colors'
import { styleBtnSuccess } from '../themes/styleButton'

interface ListQuestionProps {
    questions?: QuestionType[]
}

export const ListQuestions = ({ questions }: ListQuestionProps) => {
    return (
        <>
            {questions?.map((question, idx) => (
                <Grid container mt={2} spacing={2}  key={question.id}>
                    <Grid item xs={12}>
                        <Typography variant='h5' color={Colors.grayPrimary}>
                            {idx+1} -
                        </Typography>
                    </Grid>
                    <Grid item ml={3} xs={12}>
                        <TextField
                            variant='filled'
                            fullWidth
                            label='Título*'
                            name='name'
                            value={question.title}
                        // onChange={handleChange}
                        />
                    </Grid>
                    <Grid item mt={1} ml={3} xs={12}>
                        <TextField
                            rows={4}
                            multiline
                            fullWidth
                            variant='filled'
                            label='Descrição*'
                            name='description'
                            value={question.description}
                            // onChange={handleChange}
                        />
                    </Grid>
                    <Grid item mt={1} ml={3} xs={12}>
                        <TextField
                            rows={4}
                            multiline
                            fullWidth
                            variant='filled'
                            label='Resposta*'
                            name='description'
                            value={question.response}
                            // onChange={handleChange}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                <Button sx={styleBtnSuccess} variant="contained" color='success'>
                                    Atualizar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
