'use client';

import React, { useEffect, useState } from 'react';

import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type YesNoApiAnswer = {
  answer: 'yes' | 'no' | 'maybe';
  image: string;
};

const defaultLuckyAnswer: YesNoApiAnswer = { answer: 'yes', image: 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif' };

const ShouldTakeBreak: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [luckyAnswer, setLuckyAnswer] = useState<YesNoApiAnswer>(defaultLuckyAnswer);

  const onFabClick = () => {
    setOpen(true);
  };

  const getLuckyAnswer: () => void = () => {
    fetch('https://yesno.wtf/api')
      .then((response) => response.json())
      .then(({ answer, image }) => {
        setLuckyAnswer({ answer, image });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching lucky answer:', error);
        setLuckyAnswer(defaultLuckyAnswer);
      });
  };

  useEffect(() => {
    getLuckyAnswer();
  }, []);

  const handleClose = () => {
    setOpen(false);
    getLuckyAnswer();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="should-take-break-modal"
        aria-describedby="random-answer-for-should-take-break"
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xxs: 'fit-content', sm: '100%' },
          maxWidth: { xxs: '100%', sm: 700 },
          bgcolor: '#435957',
          color: 'common.white',
          border: '2px solid',
          borderColor: 'primary.dark',
          boxShadow: 24,
          p: 4,
        }}
        >
          <Typography id="should-take-break-modal" variant="h6" component="h2">
            Should you take a break from your task?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xxs: 'column', sm: 'row' },
              gap: { xxs: 2, sm: 4 },
            }}
          >
            <Typography
              id="random-answer-for-should-take-break"
              color="primary.main"
              sx={{ display: 'inline' }}
            >
              Let&apos;s see...
              {' '}
              {
                luckyAnswer?.answer === 'yes'
                  ? 'Go for it'
                  : luckyAnswer?.answer === 'no'
                    ? 'Go back to work NOW!'
                    : 'You choose'
              }
            </Typography>
            <Box>
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  width: 200,
                }}
              >
                <Image
                  src={luckyAnswer?.image}
                  alt={luckyAnswer?.answer ? 'yes image' : 'no image'}
                  fill
                  sizes="100%"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          '&:hover': {
            '& .MuiFab-root': {
              '& .MuiTypography-body2': {
                display: { xxs: 'none', xs: 'block' },
              },
            },
          },
        }}
      >
        <Fab
          size="medium"
          variant="extended"
          color="primary"
          aria-label="Should you take a break?"
          onClick={onFabClick}
          sx={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            height: 'fit-content',
            bottom: { xxs: 24, sm: 30, md: 40 },
            right: { xxs: 16, md: 20 },
          }}
        >
          <Typography
            component="div"
            variant="body2"
            color="inherit"
            sx={{ display: { xxs: 'none', md: 'block' } }}
          >
            Should you take a break?
          </Typography>
          <FreeBreakfastIcon color="inherit" sx={{ m: 1, width: 24 }} />
        </Fab>
      </Box>

    </>

  );
};

export default ShouldTakeBreak;
