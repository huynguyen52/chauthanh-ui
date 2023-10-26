import { Banner, Footer, OutstadingImage } from '@/components';
import { Box } from '@mui/system';
import { Category, OutstadingVideo } from './section';

export const Library = () => {
  return (
    <Box>
      <Banner />
      <Category />
      <OutstadingImage />
      <OutstadingVideo />
      <Footer />
    </Box>
  );
};
