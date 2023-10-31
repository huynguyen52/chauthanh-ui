import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import arrowLeft from '@/assets/arrow_left.svg';
import arrowRight from '@/assets/arrow_right.svg';

interface BannerTitleProps {
  children: string;
}

export const BannerTitle = (props: BannerTitleProps) => {
  const { children } = props;
  return (
    <Box position='relative'>
      <Box sx={{ position: 'absolute', top: '-5px', left: '-75px' }} maxWidth='60px' component='img' src={arrowLeft} />
      <Typography fontFamily='Lobster, sans-serif' color='white.main' fontSize='6rem'>
        {children}
      </Typography>
      <Box
        sx={{ position: 'absolute', top: '-5px', right: '-75px' }}
        maxWidth='60px'
        component='img'
        src={arrowRight}
      />
    </Box>
  );
};
