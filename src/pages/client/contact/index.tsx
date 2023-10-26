import { Banner, Footer, Hero } from '@/components';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { ContactForm, Info, Relative } from './section';

export const Contact = () => {
  return (
    <Box>
      <Banner />
      <Hero />
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ContactForm />
            <Info />
          </Grid>
          <Grid item xs={12} md={6}>
            <Relative />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};
