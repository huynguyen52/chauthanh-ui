import { Box } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';
import { BannerTitle } from './BannerTitle';

interface BannerProps {
  title: string;
  src: string;
}

export const Banner = (props: BannerProps) => {
  const { title, src } = props;
  return (
    <Box
      sx={{
        backgroundImage: `url(${src})`,
        height: '50vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth='xl' sx={{ height: 1 }}>
        <Box
          height={1}
          position='relative'
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <BannerTitle>{title}</BannerTitle>
          <Button sx={{ py: '12px', position: 'absolute', bottom: '-25px', left: 0 }} variant='contained' color='white'>
            <Typography color='black' textTransform='initial' component='span'>
              Trang chủ ||{' '}
            </Typography>
            <Typography textTransform='initial' component='span' color='secondary.main'>
              {title}
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
