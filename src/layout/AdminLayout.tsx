import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <Box>
      <Typography>Admin</Typography>
      <Outlet />
    </Box>
  );
};
