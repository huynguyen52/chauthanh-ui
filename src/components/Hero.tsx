import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Title } from '@/components';

export const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', height: '50vh' }}>
      <Container maxWidth='xl' sx={{ height: 1 }}>
        <Box height={1} display='flex' justifyContent='center' alignItems='center' gap={4.25} flexDirection='column'>
          <Title color='white.main' title='Châu Thành Travel' sub='Chúng tôi là' align='center' />
          <Typography mx='auto' textAlign='center' color='white.main' maxWidth='560px'>
            Hậu Giang sở hữu phong cảnh làng quê thuần nông mà ít địa phương nào trong vùng có được và đặc biệt là người
            dân mến khách, nghĩa tình, thủy chung
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
