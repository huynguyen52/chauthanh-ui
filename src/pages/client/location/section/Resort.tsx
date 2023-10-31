import { Title } from '@/components';
import { Button, Container, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';

export const Resort = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Stack direction='row' justifyContent='space-between'>
          <Title title='Địa điểm nghỉ dưỡng' sub='Nghỉ dưỡng' />
          <Button variant='contained' color='primary'>
            Xem tất cả
          </Button>
        </Stack>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
