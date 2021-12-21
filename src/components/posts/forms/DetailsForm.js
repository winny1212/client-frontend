import React, { useState } from 'react';

// Components & Data
import FormInput from '../../shared/FormInput';
import FormLabel from '../../shared/FormLabel';
import breeds from '../../../data/breedsData';
import { splitWords } from '../../../utils/postUtils';

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
  const {
    postData,
    setPostData,
    selectedBreed,
    setSelectedBreed,
    toolsValue,
    setToolsValue,
    handleChange,
  } = props;

  return (
    <>
      <FormInput
        hint="Short & eye-catching post title"
        label="Title"
        name="title"
        id="title"
        required
        onChange={handleChange}
        value={postData.title}
      />

      <FormInput
        hint="Describe the grooming process"
        label="Short Description"
        name="description"
        id="description"
        multiline
        rows={2}
        onChange={handleChange}
        value={postData.description}
      />

      <Stack spacing={1}>
        <FormLabel>This grooming is best suited for</FormLabel>
        <Autocomplete
          fullWidth
          id="dog-breed"
          name="breed"
          options={breeds}
          renderInput={(params) => <TextField {...params} label="Dog Breed" />}
          getOptionLabel={(option) => option.label}
          value={selectedBreed}
          onChange={(e, newBreed) => setSelectedBreed(newBreed)}
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Dog size</FormLabel>
          <RadioGroup row aria-label="dogSize" name="dogSize">
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
        <FormLabel>Approximate grooming time</FormLabel>
        <p>Slider here</p>
      </Stack>

      <FormInput
        hint="Recommended tools or products to use"
        label="Tools"
        name="tools"
        id="tools"
        helperText="Separate each item with a comma"
        value={postData.tools}
        onChange={(e) =>
          setPostData({ ...postData, tools: e.target.value.split(',') })
        }
      />

      <Stack spacing={1}>
        <FormLabel>Upload grooming photos</FormLabel>
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
