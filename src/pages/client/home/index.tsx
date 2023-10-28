import { Footer, LinkedList, OutstadingImage } from '@/components';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { AboutUs, Banner, CustomSlider, OutstandingBlogs, OutstandingTours } from './section';

export const Home = () => {
  return (
    <Box>
      <Banner />
      <CustomSlider />
      <OutstandingTours />
      <AboutUs />
      <Container maxWidth='xl'>
        <OutstadingImage />
      </Container>
      <LinkedList />
      <OutstandingBlogs />

      <Footer />
    </Box>
  );
};
