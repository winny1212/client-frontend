import '../../index.css';
import { createTheme } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors/';

/* 400, 700 */
/* font-family: 'Libre Baskerville', serif; */
/* 400, 600, 800 */
/* font-family: 'Montserrat', sans-serif; */

// set global reusable variables
const g = {
  colorPrimary: 'rgba(80, 45, 92, 1)',
  colorSecondary: 'rgba(153, 132, 203, 1)',
  colorBase: grey[200],
  // accent colors
  accentYellow: 'rgba(236, 197, 144, 1)',
  accentPink: 'rgba(203, 133, 168, 1)',
  // fonts
  fontPrimary: `'Libre Baskerville', serif`,
  fontSecondary: `'Montserrat', sans-serif`,
};

const theme = (mode) =>
  createTheme({
    // color settings
    palette: {
      mode: 'light',
      primary: {
        main: g.colorPrimary,
      },
      secondary: {
        main: g.colorSecondary,
      },
      background: {
        default: g.colorBase,
      },
      text: {
        primary: g.colorPrimary,
      },
      // accent colors
      error: {
        main: pink[500],
      },
      warning: {
        main: '#ff9800',
      },
      info: {
        main: '#4dd0e1',
      },
      success: {
        main: '#aed581',
      },
      divider: g.colorPrimary,
    },
    typography: {
      fontFamily: g.fontPrimary,
      h1: {
        fontFamily: g.fontPrimary,
        // fontWeight: 700,
      },
      h2: {
        fontFamily: g.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h3: {
        fontFamily: g.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h4: {
        fontFamily: g.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      body1: {
        fontFamily: g.fontSecondary,
      },
      body2: {
        fontFamily: g.fontSecondary,
      },
      button: {
        fontFamily: g.fontSecondary,
        fontWeight: 600,
        letterSpacing: 1,
        // textTransform: 'uppercase',
      },
      subtitle1: {
        fontFamily: g.fontSecondary,
        // fontStyle: 'italic',
        fontWeight: 600,
        textTransform: 'uppercase',
      },
      subtitle2: {
        fontFamily: g.fontSecondary,
        textTransform: 'uppercase',
      },
      caption: {
        fontFamily: g.fontSecondary,
      },
      overline: {
        fontFamily: g.fontSecondary,
      },
    },
  });

export default theme;
