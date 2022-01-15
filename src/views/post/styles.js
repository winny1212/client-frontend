import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    overflow: 'hidden',
    borderRadius: '10px',
    border: '1px solid black',
  },
  showBox: {
    width: '60%',
    padding: '1rem 2rem',
  },
  commentsBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'start',
    width: '40%',
    padding: '1rem 2rem',
  },
  commentsShow: {
    overflowY: 'auto',
    height: '220px',
  },
  btn: {
    maxWidth: '40%',
  },
}));
