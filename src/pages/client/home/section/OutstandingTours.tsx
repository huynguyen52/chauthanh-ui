import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface TourCardProps {
  tour: {
    title: string;
    price: string;
    infos: {
      [key: string]: string;
    }[];
  };
}

const TourCard = ({ tour }: TourCardProps) => {
  const { title, price, infos } = tour;
  const infoItems = [];
  for (const info of infos) {
    const { key, value } = info;
    infoItems.push(
      <Box component='li' key={key}>
        <Typography component='span'>{key}: </Typography>
        <Typography component='span'>{value}</Typography>
      </Box>,
    );
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{price}</Typography>
        {infoItems}
      </CardContent>
      <CardActions>
        <Button size='small'>Xem tat ca</Button>
      </CardActions>
    </Card>
  );
};

const tourList = [
  {
    title: 'Tour du lich truyen thong',
    price: '1.000.000 VND',
    infos: [
      {
        key: 'Loại tour',
        value: 'tour đoàn',
      },
      {
        key: 'Thời gian',
        value: '1 ngày',
      },
      {
        key: 'Phương tiện',
        value: 'ô tô',
      },
      {
        key: 'liên hệ',
        value: '0988.966.525',
      },
    ],
  },
];

export const OutstandingTours = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          Tour noi bat
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            {tourList.map((tour, index) => (
              <Grid item xs={4} key={index}>
                <TourCard tour={tour} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
