import { AccordionSummary, Accordion as AccordionMui, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Colors } from '../themes/Colors';

interface AccordionProps {
    icon: React.ReactNode,
    title: string,
    content: string,
    color: string
}

export const Accordion = ({ ...props }: AccordionProps) => {
    return (
        <AccordionMui 
            sx={{mt: 2, background: props.color, border: 'none', borderRadius: 1, borderLeft: `6px solid ${props.color === '#fcf6ac' ? Colors.yellowPrimary : Colors.redPrimary}`}} 
            elevation={0}
            className="customAccordion"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {props.icon} {props.title}
            </AccordionSummary>
            <AccordionDetails sx={{background: props.color, borderRadius: 3}}>
                {props.content}
            </AccordionDetails>
        </AccordionMui>
    )
}
