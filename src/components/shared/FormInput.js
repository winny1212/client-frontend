import TextField from '@mui/material/TextField';

function FormInput(props) {
  const { ...inputProps } = props;
  return (
    <>
      <TextField sx={{}} {...inputProps} />
    </>
  );
}

export default FormInput;
