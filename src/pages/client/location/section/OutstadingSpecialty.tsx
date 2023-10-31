import { Title } from '@/components';
import { Button, Container, Stack } from '@mui/material';
import { Box } from '@mui/system';

export const OutStadingSpecialty = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Stack direction='row' justifyContent='space-between' alignItems='flex-end'>
          <Title title='Đặc sản tiêu biểu' sub='Đặc sản' align='left' />
          <Button variant='contained' color='primary'>
            Xem tất cả
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
