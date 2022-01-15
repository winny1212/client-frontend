import FormInput from '../../shared/FormInput';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';

// MUI
import Stack from '@mui/material/Stack';

const EditStep = ({
  currentStep,
  setIsEditing,
  handleEditInputChange,
  handleSaveEditedStep,
}) => {
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
        value={currentStep.text}
        onChange={handleEditInputChange}
      />

      <Stack
        direction="row"
        justifyContent={{ xs: 'center', md: 'flex-end' }}
        spacing={1}
        mt={1.5}
      >
        <StyledBtn
          size="small"
          type="submit"
          onClick={handleSaveEditedStep}
          color="secondary"
        >
          Update Step
        </StyledBtn>

        <StyledBtnOutlined size="small" onClick={() => setIsEditing(false)}>
          Cancel
        </StyledBtnOutlined>
      </Stack>
    </>
  );
};

export default EditStep;
