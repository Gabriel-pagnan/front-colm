import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as SelectMui } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';


interface ISelectProps extends SelectInputProps {
    options: any[];
    label: string;
}

export const Select = ({ options, label, ...selectProps }: ISelectProps) => {
    return (
        <FormControl variant="filled" sx={{ minWidth: '100%' }}>
            <InputLabel id="select-filled-label">{label}</InputLabel>
            <SelectMui
                labelId="permission-select-filled-label"
                id="permission-filled"
                {...selectProps}
            >
                { options.length ? (
                    options.map((opt) => (
                        <MenuItem key={opt.id} value={opt.label}>
                            {opt.label}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                )}
            </SelectMui>
        </FormControl>
    )
}
