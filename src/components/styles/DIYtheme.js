import { createTheme } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors/';

// set global reusable variables
const g = {
  colorPrimary: 'rgba(80, 45, 92, 1)',
  colorSecondary: 'rgba(153, 132, 203, 1)',
  colorBase: grey[200],
  // accent colors
  accentYellow: 'rgba(236, 197, 144, 1)',
  accentPink: 'rgba(203, 133, 168, 1)',
};

const theme = (mode) =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: g.colorPrimary,
      },
      secondary: {
        main: g.colorSecondary,
      },
      error: {
        main: pink[500],
      },
      background: {
        default: g.colorBase,
      },
      text: {
        primary: g.colorPrimary,
      },
    },
  });

export default theme;
