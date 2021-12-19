import React from 'react';

// Components & Data
import FormInput from '../../shared/FormInput';
import FormHint from '../../shared/FormHint';

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// import Box from '@mui/material/Box';

// onChange = { handleChange };

function DetailsForm(props) {
  // eslint-disable-next-line
  const { breeds, postData, setPostData, handleChange } = props;
  return (
    <>
      <FormInput
        hint="Short & eye-catching title"
        label="Title"
        id="post-title"
        required
      />

      <FormInput
        hint="Describe the grooming process"
        label="Short Description"
        id="post-description"
        multiline
        rows={2}
      />

      <Stack spacing={1}>
        <FormHint>This grooming is best suited for</FormHint>
        <Autocomplete
          disablePortal
          id="dog-breed"
          options={breeds}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Dog Breed"
              sx={{ textTransform: 'capitalize' }}
            />
          )}
        />

        <FormControl component="fieldset">
          <FormHint component="legend">Dog size</FormHint>
          <RadioGroup row aria-label="dog-size" name="dog-size">
            <FormControlLabel
              value="small"
              control={<Radio size="small" />}
              label="Small"
            />
            <FormControlLabel
              value="medium"
              control={<Radio size="small" />}
              label="Medium"
            />
            <FormControlLabel
              value="large"
              control={<Radio size="small" />}
              label="Large"
            />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack spacing={1}>
        <FormHint>Approximate grooming duration</FormHint>
        <p>Slider here</p>
      </Stack>

      <Stack spacing={1}>
        <FormHint>Upload grooming photos</FormHint>
        <p>WIP Before Image</p>
        <p>WIP After Image</p>
      </Stack>

      <FormInput
        hint="Include grooming video link if available"
        label="Video Link"
        id="post-videolink"
      />
    </>
  );
}

export default DetailsForm;
