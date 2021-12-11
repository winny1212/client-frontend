import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors/';

const theme = (mode) =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#502d5c',
      },
      secondary: {
        main: '#9984cb',
      },
      background: {
        default: grey[200],
      },
    },
  });

export default theme;
