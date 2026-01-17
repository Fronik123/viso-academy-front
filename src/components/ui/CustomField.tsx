'use client';

import { TextField, TextFieldProps } from '@mui/material';

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#27272a',
    '& fieldset': {
      borderColor: '#52525b',
    },
    '&:hover fieldset': {
      borderColor: '#71717a',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#71717a',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#d4d4d8',
  },
  '& .MuiInputBase-input': {
    color: '#fafafa',
  },
};

export default function CustomField(props: TextFieldProps) {
  return <TextField {...props} sx={{ ...textFieldStyles, ...props.sx }} />;
}
