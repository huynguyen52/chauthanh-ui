import { createTheme } from '@mui/material';

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    blackColor: Palette['primary'];
  }

  interface PaletteOptions {
    blackColor?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blackColor: true;
  }
}

const theme = createTheme({
  components: {},
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: '#357960',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F4BD1A',
      contrastText: '#ffffff',
    },
    blackColor: {
      main: '#1d1d35',
    },
  },
});

export default theme;
