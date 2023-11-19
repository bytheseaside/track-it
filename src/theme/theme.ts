import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import customBreakpoints from './customBreakpoints';
import customPalette from './customPalette';
import customTypography from './customTypography';

const theme = createTheme({
  ...customPalette,
  ...customTypography,
  ...customBreakpoints,
});

export default responsiveFontSizes(theme);
