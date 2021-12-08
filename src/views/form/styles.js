import { makeStyles } from '@material-ui/core';

export default makeStyles((style) => ({
  form: {
    maxWidth: '800px',
    margin: '2rem auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  root: {
    '& .MuiTextField-root': {
      margin: style.spacing(1),
    },
  },
  paper: {
    padding: style.spacing(2),
  },
}));
