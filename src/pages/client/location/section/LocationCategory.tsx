import { BlogCard, SlideCard, Title } from '@/components';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import vuichoi from '@/assets/vuichoi.png';

const lists = [
  {
    id: '1',
    title: 'abc',
    sub: 'string',
    img: '',
    categoryIds: ['1'],
  },
];

export const LocationCategory = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Title title='Danh mục' sub='Địa điểm' />
        <Grid container spacing='30px'>
          <Grid item xs={12} md={4}>
            <SlideCard title='Vui chơi, giải trí' sub='06' img={vuichoi} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl'>
        <Title title='Những địa điểm du lịch giải trí nổi bật mục' sub='Du lịch' />
        <Grid container>
          {lists.map((item) => (
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard title={item.title} sub={item.sub} img={item.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
