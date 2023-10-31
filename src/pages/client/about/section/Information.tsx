import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bg1 from '@/assets/rectangle_114.png';
import bg2 from '@/assets/rect2.jpeg';

export const Information = () => {
  const SPACING = 80;
  return (
    <Box sx={{ bgcolor: '#E3EEF2' }}>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack justifyContent='center' height={1} mr={{ md: 10, xs: 0 }} py={{ md: 0, xs: 10 }}>
              <Typography fontSize='3.2rem' color='primary.main' mb={1}>
                Thông tin
              </Typography>
              <Typography fontSize='1.8rem'>
                Châu Thành là huyện cửa ngõ của tỉnh Hậu Giang, cách trung tâm tỉnh 25 km về hướng đông bắc và cách
                thành phố Cần Thơ 10 km. Với nhiều đặc sản cây trái, địa điểm tham quan du lịch miệt vườn sông nước và
                những khu công nghiệp nhẹ mới nổi.{' '}
              </Typography>
              <Divider sx={{ borderColor: 'secondary.main', marginRight: '80%', my: 5 }} />
              <Typography fontSize='3.2rem' color='primary.main' mb={1}>
                Sứ mệnh
              </Typography>
              <Typography fontSize='1.8rem'>
                Với mục tiêu tương lai đưa Châu Thành đến gần với du khách nhiều hơn, chúng tôi sẽ ngày càng nâng cấp và
                phát triển, đưa Châu Thành - Hậu Giang đến gần với du khách hơn, thúc đẩy kinh tế tỉnh và nước nhà nhiều
                hơn!
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position='relative'>
              <Box
                width={1}
                maxHeight='720px'
                sx={{
                  ml: `${SPACING}px`,
                  mb: `${SPACING}px`,
                  objectFit: 'cover',
                  borderBottomRightRadius: '20px',
                }}
                component='img'
                src={bg1}
              />
              <Box
                width={`calc(100% - ${SPACING}px)`}
                height={`calc(100% - ${SPACING}px)`}
                position='absolute'
                sx={{
                  objectFit: 'cover',
                  inset: 0,
                  top: `${SPACING}px`,
                  borderTopLeftRadius: '20px',
                }}
                component='img'
                src={bg2}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
