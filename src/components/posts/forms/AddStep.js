import FormInput from '../../shared/FormInput';
import { StyledBtnOutlined } from '../../shared/StyledButtons';

// MUI
import Box from '@mui/material/Box';

const AddStep = ({ step, handleInputChange, handleStepSubmit }) => {
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

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledBtnOutlined
          size="small"
          type="submit"
          onClick={handleStepSubmit}
        >
          Add Step
        </StyledBtnOutlined>
      </Box>
    </>
  );
};

export default AddStep;
