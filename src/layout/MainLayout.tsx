import { Outlet } from 'react-router-dom';
import DrawerAppBar from '@/components/DrawerAppBar';

export const MainLayout = () => {
  return (
    <DrawerAppBar>
      <Outlet />
    </DrawerAppBar>
  );
};
