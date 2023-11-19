'use client';

import React from 'react';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface Props {
  sx?: SxProps<Theme>;
}

const ToDoBoard: React.FC<Props> = ({ sx = [] }) => (
  <Box sx={[{ position: 'relative', p: 4 }, ...(Array.isArray(sx) ? sx : [sx])]} component="section">

  </Box>
);

export default ToDoBoard;
