import {
  Button,
  Container,
  Grid as MuiGrid,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Title } from '@/components';

export const OutstandingBlogs = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Stack direction='row' justifyContent='space-between'>
          <Title title='Blogs' align='left' />
          <Button variant='contained' color='primary'>
            Xem tất cả
          </Button>
        </Stack>
        <MuiGrid container>
          <MuiGrid item xs={3}>
            <List
              component='nav'
              subheader={
                <ListSubheader component='div'>
                  <Typography fontSize='1.4rem' fontWeight={700} color='#92A143'>
                    Danh mục
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText
                  sx={{
                    ml: 1.5,
                    '& span': {
                      fontSize: '1.6rem',
                      fontWeight: 600,
                    },
                  }}
                  primary='Sent mail'
                />
              </ListItemButton>
            </List>
          </MuiGrid>
          <MuiGrid item xs={9}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                '& .swiper': {
                  width: '100%',
                  height: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                },
                '& .swiper-slide': {
                  textAlign: 'center',
                  fontSize: '18px',
                  background: '#fff',
                  height: 'calc((100% - 30px) / 2) !important',

                  /* Center slide text vertically */
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
            >
              <Swiper
                slidesPerView={3}
                grid={{
                  rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                className='mySwiper'
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </Box>
          </MuiGrid>
        </MuiGrid>
      </Container>
    </Box>
  );
};
