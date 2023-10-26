import { Banner, Footer, Hero, LinkedList, Video } from '@/components';
import { Box } from '@mui/system';
import { Information, Testimonial } from './section';

export const About = () => {
  return (
    <Box>
      <Banner />
      <Hero />
      <Information />
      <Video />
      <Testimonial />
      <LinkedList />
      <Footer />
    </Box>
  );
};
