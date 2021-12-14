import '../../index.css';
import global from './globalStyle';
import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors/';

/* 400, 700 */
/* font-family: 'Libre Baskerville', serif; */
/* 400, 600, 800 */
/* font-family: 'Montserrat', sans-serif; */

const { palette } = createTheme();

const theme = (mode) =>
  createTheme({
    // color settings
    palette: {
      mode: 'light',
      primary: {
        main: global.colorPrimary,
      },
      secondary: {
        main: global.colorSecondary,
      },
      background: {
        default: global.colorBase,
      },
      text: {
        primary: global.colorPrimary,
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
      divider: global.colorPrimary,
      // generate new custom colors to be used in MUI components
      accentYellow: palette.augmentColor({
        color: { main: global.accentYellow },
      }),
      accentPink: palette.augmentColor({
        color: { main: global.accentPink },
      }),
    },
    typography: {
      fontFamily: global.fontPrimary,
      h1: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
      },
      h2: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h3: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h4: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      body1: {
        fontFamily: global.fontSecondary,
      },
      body2: {
        fontFamily: global.fontSecondary,
      },
      button: {
        fontFamily: global.fontSecondary,
        fontWeight: 600,
        letterSpacing: 1,
        // textTransform: 'uppercase',
      },
      subtitle1: {
        fontFamily: global.fontSecondary,
        // fontStyle: 'italic',
        fontWeight: 600,
        textTransform: 'uppercase',
      },
      subtitle2: {
        fontFamily: global.fontSecondary,
        textTransform: 'uppercase',
      },
      caption: {
        fontFamily: global.fontSecondary,
      },
      overline: {
        fontFamily: global.fontSecondary,
      },
      headerTitle: {
        fontFamily: global.fontPrimary,
        fontStyle: 'italic',
        fontSize: '1.5rem',
        letterSpacing: -0.5,
      },
    },
  });

export default theme;
