import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';

interface TitleProps {
  title: string;
  sub?: string;
  align?: 'center' | 'left' | 'right';
  sx?: SxProps<Theme>;
}

export const Title = (props: TitleProps) => {
  const { title, sub, align, sx } = props;
  return (
    <Box sx={sx} textAlign={align || 'center'}>
      {sub && (
        <Typography
          lineHeight={1.2}
          fontFamily='Lobster, sans-serif'
          fontStyle='italic'
          fontSize='2rem'
          color='secondary.main'
        >
          {sub}
        </Typography>
      )}
      <Typography lineHeight={1} fontWeight={700} fontSize='3.2rem' color='primary.main' variant='h5'>
        {title}
      </Typography>
    </Box>
  );
};
