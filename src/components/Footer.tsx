import { Button, Divider, Grid, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import map from '@/assets/map.png';
import { Link } from 'react-router-dom';
import { menus } from '@/utils/constants';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socials = [
  {
    icon: <FacebookOutlinedIcon sx={{ fontSize: '4.2rem' }} />,
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: '4.2rem' }} />,
  },
  {
    icon: <YouTubeIcon sx={{ fontSize: '4.2rem' }} />,
  },
];

export const Footer = () => {
  return (
    <Box mt={{ md: 10, xs: 5 }}>
      <Box component='footer'>
        <Grid container flexDirection={{ md: 'row', xs: 'column-reverse' }}>
          <Grid item xs={12} md={7}>
            <Box component='img' src={map} sx={{ objectFit: 'cover', width: 1 }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              height={1}
              width={1}
              px={{ xs: '32px' }}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
            >
              <Stack direction='row' sx={{ mb: [3, 3, 0] }}>
                <TextField
                  sx={{
                    flex: 1,
                    border: 'none',
                    boxShadow: 'none',
                    '& fieldset': {
                      border: 'none',
                    },
                    backgroundColor: '#F6F6F6',
                  }}
                  placeholder='Enter your email address'
                />
                <Button variant='contained' color='primary' sx={{ borderRadius: 0 }}>
                  Subscribe
                </Button>
              </Stack>
              <Grid container>
                {menus.map((item) => (
                  <Grid item xs={4}>
                    <MuiLink sx={{ color: 'black' }} underline='hover' to={item.path} component={Link}>
                      {item.title}
                    </MuiLink>
                  </Grid>
                ))}
              </Grid>
              <Divider sx={{ mt: [3, 3, 0] }} />
              <Box component='ul' sx={{ listStyle: 'none', p: 0, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                {socials.map((item) => (
                  <Box component='li'>
                    <MuiLink>{item.icon}</MuiLink>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: 'primary.main' }} py={1}>
        <Typography color='white.main' fontSize='1.8rem' fontWeight={600} textAlign='center'>
          Copyright © 2022 Du lịch huyện Châu Thành - tỉnh Hậu Giang
        </Typography>
      </Box>
    </Box>
  );
};
