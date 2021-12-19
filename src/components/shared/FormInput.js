import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import FormHint from './FormHint';

function FormInput(props) {
  const { hint, ...inputProps } = props;
  return (
    <>
      <FormHint>{hint || ' '}</FormHint>
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
