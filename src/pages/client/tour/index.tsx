import { Banner, Footer, OutstadingImage } from '@/components';
import { Box } from '@mui/system';
import { TourList } from './section';
import { Introduce } from './section/Introduce';

export const Tour = () => {
  return (
    <Box>
      <Banner />
      <TourList />
      <Introduce />
      <OutstadingImage />
      <Footer />
    </Box>
  );
};
