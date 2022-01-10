import React, { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Components
import FormInput from '../../shared/FormInput';
import Hr from '../../shared/Hr';
import { StyledBtnOutlined } from '../../shared/StyledButtons';

function Steps() {
  // state for lists of steps
  const [stepsList, setStepsList] = useState([]);
  // state for each step
  const [step, setStep] = useState('');

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
      />

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledBtnOutlined size="small">Add Step</StyledBtnOutlined>
      </Box>

      <Hr />

      <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
        Grooming instructions preview
      </Typography>

      <Grid></Grid>
    </>
  );
}

export default Steps;
