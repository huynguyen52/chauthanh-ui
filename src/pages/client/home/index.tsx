import { Footer, LinkedList, OutstadingImage } from '@/components';
import { Box } from '@mui/system';
import { AboutUs, Banner, CustomSlider, OutstandingBlogs, OutstandingTours } from './section';

export const Home = () => {
  return (
    <Box>
      <Banner />
      <CustomSlider />
      <OutstandingTours />
      <AboutUs />
      <OutstadingImage />
      <LinkedList />
      <OutstandingBlogs />

      <Footer />
    </Box>
  );
};
