import { Footer, LinkedList, OutstadingImage } from '@/components';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { AboutUs, Banner, CustomSlider, OutstandingBlogs, OutstandingTours } from './section';

export const Home = () => {
  return (
    <Box>
      <Banner />
      <Container maxWidth='xl'>
        <CustomSlider />
      </Container>
      <Container maxWidth='xl'>
        <OutstandingTours />
      </Container>
      <Container maxWidth='xl'>
        <AboutUs />
      </Container>
      <Container maxWidth='xl'>
        <OutstadingImage />
      </Container>
      <Container maxWidth='xl'>
        <LinkedList />
      </Container>
      <Container maxWidth='xl'>
        <OutstandingBlogs />
      </Container>
      <Footer />
    </Box>
  );
};
