import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import img1 from '@/assets/thuvien-banner.jpeg';

export const AboutUs = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box height='60%' p='57px' border='2px solid #fff'>
              <Box component='img' sx={{ objectFit: 'cover', width: '100%' }} src={img1} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Typography>Ve chung toi</Typography>
              <Typography>asd</Typography>
              <Button>Xem tat ca</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box>
              <Typography>Du lich chau thanh</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
