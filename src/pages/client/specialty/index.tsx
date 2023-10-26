import { Banner, Footer } from '@/components';
import { Box } from '@mui/system';
import { Contact, SpecialtyList } from './section';

export const Specialty = () => {
  return (
    <Box>
      <Banner />
      <SpecialtyList />
      <Contact />
      <Footer />
    </Box>
  );
};
