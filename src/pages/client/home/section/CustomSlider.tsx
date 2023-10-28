import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '@/assets/nhan.png';
import img2 from '@/assets/xoaituquy.png';
import img3 from '@/assets/cathaclac.png';
import img4 from '@/assets/chomchom.png';

const imgList = [
  {
    title: 'Xoài tứ quý',
    img: img1,
  },
  {
    title: 'Nhãn xuồng cơm vàng',
    img: img2,
  },
  {
    title: 'Cá thác lác',
    img: img3,
  },
  {
    title: 'Chôm chôm',
    img: img4,
  },
];

interface SlideCardProps {
  img: string;
  title: string;
}

const SlideCard = ({ img, title }: SlideCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={img} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CustomSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (swiper) {
      swiper.slideTo(currentSlide + 1);
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (swiper) {
      swiper.slideTo(currentSlide - 1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <Button onClick={prevSlide}>Prev</Button>
          <Button onClick={nextSlide}>Next</Button>
          <Typography>{currentSlide + 1}</Typography>
          <Typography>{imgList.length}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {imgList.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideCard img={item.img} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};
