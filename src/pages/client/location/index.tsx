import { Banner, Footer } from '@/components';
import { Box } from '@mui/system';
import { LocationCategory, OutStadingSpecialty, Resort } from './section';
import banner from '@/assets/banner_locations.png';

export const Location = () => {
  return (
    <Box>
      <Banner title='Địa điểm' src={banner} />
      <LocationCategory />
      <OutStadingSpecialty />
      <Resort />
      <Footer />
    </Box>
  );
};
