import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    width: '95vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '2rem',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  showBox: {
    width: '100%',
    padding: '1rem 2rem',
  },
  commentsBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'start',
    width: '100%',
    padding: '1rem 2rem',
  },

  commentsShow: {
    overflowY: 'auto',
    height: '220px',
  },
  btn: {
    maxWidth: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
