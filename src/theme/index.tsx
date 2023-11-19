'use client';

import React, { PropsWithChildren } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from './theme';

const CustomThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
);

export default CustomThemeProvider;
