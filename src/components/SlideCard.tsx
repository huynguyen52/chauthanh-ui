import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface SlideCardProps {
  img: string;
  title: string;
  center?: boolean;
  sub?: string;
}

export const SlideCard = ({ img, title, center, sub }: SlideCardProps) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 300, border: 'none', borderRadius: '20px', mx: center ? 'auto' : 'none' }}>
      <CardMedia sx={{ height: 250 }} image={img} title='green iguana' />
      <CardContent sx={{ backgroundColor: '#F3F3F3', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px' }}>
        <Typography fontWeight={700} fontSize='2rem' variant='h5' component='div'>
          {title}
        </Typography>
        {sub && (
          <Typography fontSize='2rem' fontWeight={600} color='secondary.main'>
            {sub}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
