import React from 'react';

// MUUI
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Components
import FormInput from '../../shared/FormInput';
import { StyledBtnOutlined } from '../../shared/StyledButtons';

function Steps() {
  return (
    <>
      <FormInput
        label="Step-by-step Instruction"
        hint="Up to 10 succinct and clear steps recommended"
        id="instructions"
        multiline
        rows={5}
        helperText="Click 'Add Step' to write more steps"
      />

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledBtnOutlined size="small">Add Step</StyledBtnOutlined>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
        Grooming instructions preview
      </Typography>
    </>
  );
}

export default Steps;
