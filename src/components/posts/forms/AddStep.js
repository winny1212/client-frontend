import FormInput from '../../shared/FormInput';
import { StyledBtn } from '../../shared/StyledButtons';

// MUI
import Box from '@mui/material/Box';

const AddStep = ({ step, handleInputChange, handleAddStep }) => {
  return (
    <>
      <FormInput
        label="Write one succinct and clear step at a time"
        hint="Step-by-step instruction"
        id="step"
        name="step"
        multiline
        rows={3}
        helperText="Click 'Add Step' to write more steps. Up to 10 steps recommended"
        required
        value={step}
        onChange={handleInputChange}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          mt: 1.5,
        }}
      >
        <StyledBtn size="small" type="submit" onClick={handleAddStep}>
          Add Step
        </StyledBtn>
      </Box>
    </>
  );
};

export default AddStep;
