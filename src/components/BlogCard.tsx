import { Box, Button, Card, CardContent, CardMedia, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  sub?: string;
  date?: string;
  direction?: 'row' | 'column';
  img: string;
}

export const BlogCard = (props: BlogCardProps) => {
  const { title, sub, img, date, direction } = props;
  return (
    <Card sx={{ display: 'flex', gap: 4, flexDirection: direction || 'row' }}>
      <CardMedia component='img' sx={{ flexBasis: '30%' }} image={img} alt='Live from space album cover' />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography fontSize='1.8rem' fontWeight={600} variant='h5'>
            {title}
          </Typography>
          {sub && (
            <Typography fontSize='1.2rem' variant='subtitle1'>
              {sub}
            </Typography>
          )}
          {date && (
            <Typography fontSize='1.2rem' variant='subtitle1'>
              {date}
            </Typography>
          )}
          <MuiLink component={Link} to='/' underline='none'>
            <Button variant='contained' color='primary'>
              Xem thêm
            </Button>
          </MuiLink>
        </CardContent>
      </Box>
    </Card>
  );
};
