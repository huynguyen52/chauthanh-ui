import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.jpeg';
import banner3 from '@/assets/banner3.jpeg';

interface BoxWithBg {
  url: string;
}

const imageList = [banner1, banner2, banner3];

const BoxWithBg = (props: BoxWithBg) => {
  const { url } = props;
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="${className}">
        <img src="${imageList[index]}"} />
      </div>`;
    },
  };
  return (
    <Box
      sx={{
        '& .swiper-pagination-bullet': {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid #fff',
          opacity: 0.6,
        },
        '& .swiper-pagination-bullet-active': {
          opacity: 1,
        },
        '& .swiper-pagination-bullet img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <BoxWithBg url={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
