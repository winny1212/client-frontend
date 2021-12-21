import React, { useState } from 'react';

// Components & Data
import FormInput from '../../shared/FormInput';
import FormLabel from '../../shared/FormLabel';
import breeds from '../../../data/breedsData';
import timeMarks from '../../../data/groomingTime';
import ImgUpload from '../../shared/ImgUpload';

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';

// onChange = { handleChange };

function DetailsForm(props) {
  const {
    postData,
    setPostData,
    selectedBreed,
    setSelectedBreed,
    toolsValue,
    setToolsValue,
    handleChange,
  } = props;

  // For Slider
  const durationValue = (value) => {
    return `up to ${value}hr`;
  };

  const handleSliderChange = (name) => (e, value) => {
    setPostData({ ...postData, [name]: value });
  };

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
          <RadioGroup
            row
            aria-label="dogSize"
            name="dogSize"
            value={postData.dogSize}
            onChange={handleChange}
          >
            <FormControlLabel
              key="small"
              value="small"
              control={<Radio size="small" />}
              label="Small"
            />
            <FormControlLabel
              key="medium"
              value="medium"
              control={<Radio size="small" />}
              label="Medium"
            />
            <FormControlLabel
              key="large"
              value="large"
              control={<Radio size="small" />}
              label="Large"
            />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack spacing={1}>
        <FormLabel>Approximate grooming time</FormLabel>
        <Box sx={{ px: 1.5 }}>
          <Slider
            aria-label="duration"
            defaultValue={1}
            getAriaValueText={durationValue}
            step={1}
            min={1}
            max={4}
            valueLabelDisplay="off"
            marks={timeMarks}
            size="small"
            value={postData.duration}
            onChange={handleSliderChange('duration')}
          />
        </Box>
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
        <FormLabel>Upload before & after grooming photos</FormLabel>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <ImgUpload id="img-before" imgLabel="Before" />
          <ImgUpload id="img-after" imgLabel="After" />
        </Stack>
      </Stack>

      <FormInput
        hint="Include grooming video link if available"
        label="Video Link"
        id="videolink"
        name="video"
        value={postData.video}
        onChange={handleChange}
      />
    </>
  );
}

export default DetailsForm;
