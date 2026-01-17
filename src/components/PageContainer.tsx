'use client';

import { Box } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box sx={containerStyles}>
      {children}
    </Box>
  );
}

const containerStyles = {
  width: '100%',
  maxWidth: '900px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  p: 3,
};