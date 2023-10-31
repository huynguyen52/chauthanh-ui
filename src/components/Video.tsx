import { Container } from '@mui/material';
import { Box } from '@mui/system';
import logoLeft from '@/assets/logo_left.svg';
import logoRight from '@/assets/logo_right.svg';

export const Video = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Box my='96px' position='relative'>
          <Box zIndex={-1} top={0} left={-200} component='img' src={logoLeft} position='absolute' />
          <Box zIndex={-1} bottom={0} right={-200} component='img' src={logoRight} position='absolute' />
          <iframe
            width='100%'
            height='500px'
            src='https://www.youtube.com/embed/EibeiQH0T7c?si=WJHxqLvfpcGymBJg'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};
