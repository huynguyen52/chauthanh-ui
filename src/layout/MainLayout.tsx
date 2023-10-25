import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import DrawerAppBar from '@/components/DrawerAppBar';

export const MainLayout = () => {
  return (
    <Box>
      <DrawerAppBar>
        <Outlet />
      </DrawerAppBar>
    </Box>
  );
};
