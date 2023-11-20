import React from 'react';

import ConstructionIcon from '@mui/icons-material/Construction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        placeContent: 'center',
        alignContent: 'center',
        color: 'primary.dark',
        mt: 10,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        color="currentColor"
        sx={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Page under construction
      </Typography>
      <ConstructionIcon
        sx={{
          fontSize: 100,
        }}
      />
      <Typography
        variant="h5"
        component="h2"
        color="currentColor"
        sx={{ textAlign: 'center', color: 'action' }}
      >
        Please come back later
      </Typography>
    </Box>
  );
}
