'use client';

import { Button, ButtonProps } from '@mui/material';

const buttonStyles = {
  mt: 1,
  backgroundColor: '#ffffff',
  color: '#18181b',
  '&:hover': {
    backgroundColor: '#18181b',
    color: '#ffffff',
  },
  '&:disabled': {
    backgroundColor: '#ffffff',
    opacity: 0.5,
  },
};

export default function CustomButton(props: ButtonProps) {
  return <Button {...props} sx={{ ...buttonStyles, ...props.sx }} />;
}
