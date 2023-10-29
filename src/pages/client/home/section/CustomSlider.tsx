import { Card, CardContent, CardMedia, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '@/assets/dualuoi.jpeg';
import img2 from '@/assets/mit.jpeg';
import img3 from '@/assets/cathaclac.jpeg';
import img4 from '@/assets/buoi.jpeg';
import img5 from '@/assets/chanh.jpeg';
import img6 from '@/assets/xoai.png';
import leaf1 from '@/assets/leaf1.svg';
import leaf2 from '@/assets/leaf2.svg';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Title } from '@/components/Title';

const imgList = [
  {
    title: 'Dưa lưới',
    img: img1,
  },
  {
    title: 'Mít siêu sớm',
    img: img2,
  },
  {
    title: 'Cá thác lác phước hoà',
    img: img3,
  },
  {
    title: 'Bưởi năm roi phú Hữu',
    img: img4,
  },
  {
    title: 'Chanh không hạt',
    img: img5,
  },
  {
    title: 'Xoài tứ quý',
    img: img6,
  },
];

interface SlideCardProps {
  img: string;
  title: string;
  center?: boolean;
}

const SlideCard = ({ img, title, center }: SlideCardProps) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 300, border: 'none', borderRadius: '20px', mx: center ? 'auto' : 'none' }}>
      <CardMedia sx={{ height: 250 }} image={img} title='green iguana' />
      <CardContent sx={{ backgroundColor: '#F3F3F3', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px' }}>
        <Typography fontWeight={700} fontSize='2rem' variant='h5' component='div'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

const PANEL_PADDING = 100;

export const CustomSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const tablet = useMediaQuery('(min-width:1200px)');
  const mobile = useMediaQuery('(max-width:600px)');
  const [slidePerView, setSlidePerView] = useState(4);

  useEffect(() => {
    if (mobile) {
      setSlidePerView(1);
    } else if (!mobile && !tablet) {
      setSlidePerView(3);
    } else {
      setSlidePerView(4);
    }
    setCurrentSlide(0);
  }, [tablet, mobile]);

  const nextSlide = () => {
    if (swiper) {
      const temp = currentSlide + 1;
      if (temp <= imgList.length - slidePerView) {
        swiper.slideTo(temp);
        setCurrentSlide(temp);
      } else {
        swiper.slideTo(0);
        setCurrentSlide(0);
      }
    }
  };
  const prevSlide = () => {
    if (swiper) {
      const temp = currentSlide - 1;
      if (temp >= 0) {
        swiper.slideTo(temp);
        setCurrentSlide(temp);
      } else {
        swiper.slideTo(imgList.length - slidePerView);
        setCurrentSlide(imgList.length - slidePerView);
      }
    }
  };

  return (
    <Box pt='72px' pb='100px'>
      <Title sx={{ mb: '72px' }} title='Đặc sản tiêu biểu' sub='Ẩm thực' align='center' />
      <Grid container>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              height: '100%',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              backgroundImage: `url(${leaf1}), url(${leaf2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0% 100%, 10% 100%',
              color: 'white.main',
              display: 'flex',
              flexDirection: {
                xs: 'row',
                md: 'column',
              },
              gap: {
                xs: '50px',
                md: 0,
              },
              justifyContent: 'center',
              alignItems: 'center',
              py: { xs: '0', md: `${PANEL_PADDING}px` },
            }}
          >
            <Stack direction={{ xs: 'row-reverse', md: 'column' }}>
              <ArrowCircleRightOutlinedIcon sx={{ cursor: 'pointer', fontSize: '5.2rem' }} onClick={nextSlide} />
              <ArrowCircleLeftOutlinedIcon sx={{ cursor: 'pointer', fontSize: '5.2rem' }} onClick={prevSlide} />
            </Stack>
            <Stack>
              <Typography fontSize='4.8rem' fontWeight={700}>
                {currentSlide + 1}
              </Typography>
              <Divider sx={{ borderBottomWidth: 'medium', borderColor: 'white.main', m: 0 }} light variant='middle' />
              <Typography fontSize='4.8rem' fontWeight={700}>
                {imgList.length - slidePerView + 1}
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={9} ml={{ xs: 0, md: '-50px' }}>
          <Box
            mt={`${PANEL_PADDING / 2}px`}
            sx={{
              '& .swiper-pagination-bullets': {
                display: 'none',
              },
            }}
          >
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={slidePerView}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {imgList.map((item, index) => (
                <SwiperSlide key={index}>
                  <SlideCard center={mobile} img={item.img} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
