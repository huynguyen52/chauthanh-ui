import { Container, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Title } from '@/components/Title';
import banner1 from '@/assets/website-1.png';
import banner2 from '@/assets/website-2.jpeg';
import banner3 from '@/assets/website-3.png';
import banner4 from '@/assets/website-4.png';
import banner5 from '@/assets/website-5.png';
import banner6 from '@/assets/website-6.png';
import mountain from '@/assets/mountain.svg';

const lists = [banner1, banner2, banner3, banner4, banner5, banner6];

export const LinkedList = () => {
  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ backgroundImage: `url(${mountain})` }}>
      <Container maxWidth='xl'>
        <Title title='Liên kết website' sub='Ẩm thực' align='center' />
        <Box sx={{ mt: ['50px', '70px', '100px'], pb: ['10px', '30px', '50px'] }}>
          <Swiper
            slidesPerView={mobile ? 3 : 5}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            {lists.map((item, index) => (
              <SwiperSlide key={index}>
                <Box width={{ lg: '160px', md: '120px', xs: '80px' }} height={{ lg: '160px', md: '120px', xs: '80px' }}>
                  <Box component='img' sx={{ width: '100%', objectFit: 'cover' }} src={item} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};
