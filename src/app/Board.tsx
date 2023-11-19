'use client';

import React from 'react';

import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface Props {
  sx?: SxProps<Theme>;
}

const Board: React.FC<Props> = ({ sx = [] }) => (
  <Box sx={[{ position: 'relative', p: 4 }, ...(Array.isArray(sx) ? sx : [sx])]} component="section">
    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'primary.light', color: 'primary.contrastText',
      }}
    >
      prim light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      prim main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
      }}
    >
      prim dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>
    <Divider />

    <Typography
      variant="body1"
      sx={{
        my: 1, backgroundColor: 'secondary.light', color: 'secondary.contrastText',
      }}
    >
      sec light
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
        },
      }}
    >
      sec main
    </Typography>
    <Typography
      variant="body1"
      sx={{
        my: 1,
        backgroundColor: 'secondary.dark',
        color: 'secondary.contrastText',
      }}
    >
      sec dark
    </Typography>

  </Box>
);

export default Board;
