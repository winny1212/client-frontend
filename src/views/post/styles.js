import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    width: '95%',
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
    // width: '100%',
    padding: '1rem 2rem',
  },

  commentsShow: {
    overflowY: 'auto',
    height: '220px',
  },

  singleComment: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  CommentUser: {
    flex: '1',
    padding: '0.8rem 1rem',
    fontSize: '1rem',
  },
  CommentTime: {
    fontSize: '0.5rem',
  },

  CommentContent: {
    flex: '2',
    padding: '0.8rem 1rem',
  },
  btn: {
    maxWidth: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
