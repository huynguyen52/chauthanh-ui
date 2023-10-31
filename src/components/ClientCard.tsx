import { Card, CardHeader, Avatar, CardContent, Typography, Grid } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const ClientCard = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          '& .MuiCardHeader-title': {
            fontSize: '2.4rem',
          },
          '& .MuiCardHeader-subheader': {
            fontSize: '1.6rem',
          },
        }}
        avatar={
          <Avatar sx={{ bgcolor: 'red', width: 64, height: 64 }} aria-label='recipe'>
            R
          </Avatar>
        }
        title='Khanh Lê'
        subheader='Khách du lịch'
      />
      <CardContent sx={{ pt: 0 }}>
        <FormatQuoteIcon sx={{ fontSize: '3.8rem', color: '#AFAFAF' }} />
        <Typography variant='body2' color='#AFAFAF' fontSize='1.6rem' lineHeight='24px'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
        <Grid container></Grid>
      </CardContent>
    </Card>
  );
};
