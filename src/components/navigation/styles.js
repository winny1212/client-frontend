import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  button: {
    borderRadius: '30px',
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: '#502D5C',
    },
  },

  navBackground: {
    backgroungColor: '#EBEAE7',
  },

  logo: {
    width: '60%',
  },
});
