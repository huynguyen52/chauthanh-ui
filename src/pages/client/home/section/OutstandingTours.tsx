import { Title } from '@/components/Title';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
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
    <Card
      sx={{
        minWidth: 250,
        borderRadius: '20px',
        color: 'black',
        transition: 'all 0.2s',
        '&:hover': {
          p: '20px',
          backgroundColor: 'secondary.main',
          color: 'white.main',
        },
      }}
    >
      <CardContent>
        <Typography fontSize='1.8rem' color='#6A380C'>
          {title}
        </Typography>
        <Typography fontSize='1.8rem' color='#6A380C'>
          Chỉ từ
        </Typography>
        <Typography fontSize='2.4rem' color='primary.main'>
          {price}
        </Typography>
        <Box p={0} component='ul' sx={{ listStyle: 'none' }}>
          {infoItems}
        </Box>
      </CardContent>
    </Card>
  );
};

const tourList = [
  {
    title: 'Tour du lịch truyền thống',
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
        key: 'Liên hệ',
        value: '0988.966.525',
      },
    ],
  },
  {
    title: 'Tour du lịch truyền thống',
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
        key: 'Liên hệ',
        value: '0988.966.525',
      },
    ],
  },
  {
    title: 'Tour du lịch truyền thống',
    price: '1.000.000 VNĐ',
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
        key: 'Liên hệ',
        value: '0988.966.525',
      },
    ],
  },
];

export const OutstandingTours = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <Title title='Tour nổi bật' sub='Tour' align='left' />
            <Typography my={4} color='##888888' fontSize='1.8rem' lineHeight='26px'>
              Hậu Giang sở hữu phong cảnh làng quê thuần nông mà ít địa phương nào trong vùng có được và đặc biệt là
              người dân mến khách, nghĩa tình, thủy chung
            </Typography>
            <Button variant='contained' color='primary' sx={{ ml: 'auto', display: 'block' }}>
              Xem tất cả
            </Button>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3} sx={{ border: '1px solid #eee', pb: '32px', pr: '32px', borderRadius: '20px' }}>
              {tourList.map((tour, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <TourCard tour={tour} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
