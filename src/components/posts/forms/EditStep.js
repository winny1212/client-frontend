import FormInput from '../../shared/FormInput';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';

// MUI
import Box from '@mui/material/Box';

const EditStep = ({ step, handleInputChange, handleAddStep }) => {
  return (
    <>
      <FormInput
        label="Write one succinct and clear step at a time"
        hint="Edit step-by-step instruction"
        id="updateStep"
        name="updateStep"
        multiline
        rows={3}
        helperText="Click 'Update' to save changes"
        value={step}
        onChange={handleInputChange}
      />

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledBtn size="small" type="submit" onClick={handleAddStep}>
          Update Step
        </StyledBtn>

        <StyledBtnOutlined size="small" onClick={handleAddStep}>
          Cancel
        </StyledBtnOutlined>
      </Box>
    </>
  );
};

export default EditStep;
