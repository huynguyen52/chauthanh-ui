import { menus } from '@/utils/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as MuiLink } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/new_logo.svg';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 240;
const CustomNavlink = React.forwardRef(
  (
    props: {
      className: string;
      activeClassName: string;
      to: string;
      children?: React.ReactNode;
    },
    ref: React.Ref<HTMLAnchorElement> | undefined,
  ) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) => {
        return `${props.className} ${isActive ? props.activeClassName : ''}`;
      }}
    >
      {props.children}
    </NavLink>
  ),
);

export default function DrawerAppBar(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <MuiLink component={Link} to='/'>
        <Box maxWidth='60px' component='img' src={logo} />
      </MuiLink>
      <Divider />
      <List>
        {menus.map((item) => (
          <MuiLink
            fontSize='1.8rem'
            underline='none'
            component={CustomNavlink}
            activeClassName='active'
            to={`/${item.path}`}
            key={item.path}
            color='blackColor.main'
            fontWeight={600}
            sx={{
              '&.active': {
                color: 'primary.main',
              },
            }}
          >
            <ListItem key={item.path} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </MuiLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          background: 'white',
        }}
      >
        <Toolbar
          sx={{
            background: 'linear-gradient(-90deg,#ddeefb,rgba(255,230,177,.1) 60%)',
          }}
        >
          <MuiLink component={Link} to='/'>
            <Box maxWidth='70px' component='img' src={logo} />
          </MuiLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}>
            {menus.map((item) => (
              <MuiLink
                fontSize='1.8rem'
                py={1}
                mx={3}
                underline='none'
                component={CustomNavlink}
                activeClassName='active'
                to={`/${item.path}`}
                key={item.path}
                color='blackColor.main'
                fontWeight={600}
                borderBottom='4px solid'
                borderColor='transparent'
                sx={{
                  '&.active': {
                    color: 'primary.main',
                    borderBottom: '4px solid',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                {item.title}
              </MuiLink>
            ))}
          </Box>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { lg: 'none' }, justifySelf: 'flex-end' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: 'block', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component='main'>
        <Toolbar sx={{ minHeight: '76px !important' }} />
        {children}
      </Box>
    </Box>
  );
}
