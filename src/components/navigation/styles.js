import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  button: {
    borderRadius: 30,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: '#502D5C',
    },
  },

  logo: {
    width: '20%',
  },
});
