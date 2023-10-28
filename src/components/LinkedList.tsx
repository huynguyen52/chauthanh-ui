import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '@/assets/website-1.png';
import banner2 from '@/assets/website-2.jpeg';
import banner3 from '@/assets/website-3.png';
import banner4 from '@/assets/website-4.png';
import banner5 from '@/assets/website-5.png';
import banner6 from '@/assets/website-6.png';

const lists = [banner1, banner2, banner3, banner4, banner5, banner6];

export const LinkedList = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Typography>LinkedList</Typography>
        <Box>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            {lists.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ width: '160px', height: '160px' }}>
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
