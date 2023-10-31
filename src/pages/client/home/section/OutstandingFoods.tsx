import { BlogCard, Title } from '@/components';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';

export const OutstandingFoods = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Title title='Ăn uống' sub='Ẩm thực' align='center' />
        <Grid container>
          <Grid item md={4} xs={12}>
            <BlogCard title='sadf' sub='asd' img='' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
