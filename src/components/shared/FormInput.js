import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import FormLabel from './FormLabel';

function FormInput(props) {
  const { hint, ...inputProps } = props;
  return (
    <>
      <FormLabel>{hint || ' '}</FormLabel>
      <TextField
        {...inputProps}
        fullWidth
        margin="dense"
        autoComplete="off"
        variant="outlined"
        sx={{}}
      />
    </>
  );
}

export default FormInput;
