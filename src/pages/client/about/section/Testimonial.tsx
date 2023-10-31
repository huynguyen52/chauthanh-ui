import { ClientCard } from '@/components';
import { Container, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const comments = [
  {
    id: '1',
    name: 'abc',
    job: 'asdf',
    comment: 'asdfasdf',
  },
  {
    id: '2',
    name: 'abc',
    job: 'asdf',
    comment: 'asdfasdf',
  },
  {
    id: '3',
    name: 'abc',
    job: 'asdf',
    comment: 'asdfasdf',
  },
  {
    id: '4',
    name: 'abc',
    job: 'asdf',
    comment: 'asdfasdf',
  },
];

export const Testimonial = () => {
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Box py={{ md: '96px', xs: '50px' }}>
      <Container maxWidth='xl'>
        <Box>
          <Swiper
            slidesPerView={mobile ? 1 : 3}
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
            {comments.map((item) => (
              <SwiperSlide>
                <Box>
                  <ClientCard />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};
