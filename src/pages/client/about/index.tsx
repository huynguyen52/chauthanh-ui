import { Banner, Footer, Hero, LinkedList, Video } from '@/components';
import { Box } from '@mui/system';
import { Information, Testimonial } from './section';
import banner from '@/assets/banner_gioithieu.png';

export const About = () => {
  return (
    <Box>
      <Banner title='Giới thiệu' src={banner} />
      <Hero />
      <Information />
      <Video />
      <Testimonial />
      <LinkedList />
      <Footer />
    </Box>
  );
};
