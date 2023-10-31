import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import img1 from '@/assets/thuvien-banner.jpeg';
import background from '@/assets/rectangle_9.png';
import logo1 from '@/assets/logo_1.svg';
import logo2 from '@/assets/logo_2.svg';
import { Title } from '@/components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const AboutUs = () => {
  return (
    <Box mt='100px'>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box mb='-30%' p={{ md: '35px', lg: '55px', xs: '25px' }} border='2px solid #fff' borderRadius='20px'>
              <Box component='img' sx={{ objectFit: 'cover', width: '100%', borderRadius: '20px' }} src={img1} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        pt={{
          xs: '200px',
          sm: '280px',
          md: '34px',
        }}
        pb='100px'
        sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Title color='white.main' sub='Câu chuyện' title='Về chúng tôi' align='left' />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography mt={6} color='white.main' fontSize='1.8rem' lineHeight='26px'>
                Châu Thành là huyện cửa ngõ của tỉnh Hậu Giang, cách trung tâm tỉnh 25 km về hướng đông bắc và cách
                thành phố Cần Thơ 10 km. Với nhiều đặc sản cây trái, địa điểm tham quan du lịch miệt vườn sông nước và
                những khu công nghiệp nhẹ mới nổi.
              </Typography>
              <Typography mb={6} color='white.main' fontSize='1.8rem' lineHeight='26px'>
                Với mục tiêu tương lai đưa Châu Thành đến gần với du khách nhiều hơn, chúng tôi sẽ ngày càng nâng cấp và
                phát triển, đưa Châu Thành - Hậu Giang đến gần với du khách hơn, thúc đẩy kinh tế tỉnh và nước nhà nhiều
                hơn!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='white'>
                Xem tất cả
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                backgroundImage: `url(${logo1}), url(${logo2})`,
                backgroundPosition: 'left top, right bottom',
                backgroundRepeat: 'no-repeat',
              }}
              mt={{
                xs: '-50px',
                md: '-20%',
              }}
              px={{
                xs: 4,
                lg: 18,
              }}
              pb={4}
              pt={{
                md: 7,
                xs: 4,
              }}
              borderRadius='20px'
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <FormatQuoteIcon sx={{ color: '#ffffff', fontSize: '5.8rem' }} />
                <Typography
                  textAlign='center'
                  fontSize='1.8rem'
                  color='white.main'
                  mt={{
                    md: 2,
                    xs: 0,
                  }}
                >
                  Du lịch Châu Thành - Hậu Giang luôn mang đến các sản phẩm và dịch vụ chất lượng dành cho khách hàng
                  dựa trên nền tảng kết nối bền vững, cùng xây dựng nên những khoảnh khắc hạnh phúc của cuộc sống.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
