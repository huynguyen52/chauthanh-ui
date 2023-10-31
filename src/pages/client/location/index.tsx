import { Banner, Footer, OutstadingImage } from '@/components';
import { Box } from '@mui/system';
import { LocationCategory, Resort } from './section';
import banner from '@/assets/banner_locations.png';
import { OutstandingFoods } from '../home/section';

export const Location = () => {
  return (
    <Box>
      <Banner title='Địa điểm' src={banner} />
      <LocationCategory />
      <OutstadingImage />
      <OutstandingFoods />
      <Resort />
      <Footer />
    </Box>
  );
};
