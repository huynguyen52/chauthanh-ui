import { Banner, Footer } from '@/components';
import { Box } from '@mui/system';
import { LocationCategory, OutStadingSpecialty, Resort } from './section';

export const Location = () => {
  return (
    <Box>
      <Banner />
      <LocationCategory />
      <OutStadingSpecialty />
      <Resort />
      <Footer />
    </Box>
  );
};
