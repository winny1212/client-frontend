import React, { useState } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../../services/firebase';
import { nanoid } from 'nanoid';

// Components & Data
import FormInput from '../../shared/FormInput';
import FormLabel from '../../shared/FormLabel';
import breeds from '../../../data/breedsData';
import timeMarks from '../../../data/groomingTime';
import ImgUpload from '../../shared/ImgUpload';
import HelperText from '../../shared/HelperText';

// Context
import { usePostContext } from '../../../context/PostContext';

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

function DetailsForm() {
  // PostContext consume
  const { details, setDetails, selectedBreed, setSelectedBreed } =
    usePostContext();

  // Images states
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle upload with Firebase
  const uploadImg = async (file, folderName, setLoading) => {
    const folderPath = folderName;
    const fileName = `img_${nanoid(10)}_${file.name}`;
    const fileRef = ref(storage, `/${folderPath}/${fileName}`);

    // setLoading(true)
    const snapshot = await uploadBytes(fileRef, file);
    // setLoading(false
    alert('File uploaded!');
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadImg(selectedFile, 'posts_images');
  };

  // For Grooming time/duration slider
  const durationValue = (value) => {
    return `up to ${value}hr`;
  };

  const handleSliderChange = (name) => (e, value) => {
    setDetails({ ...details, [name]: value });
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <>
      <FormInput
        hint="Short & eye-catching post title"
        label="Title"
        name="title"
        id="title"
        required
        onChange={handleDetailsChange}
        value={details.title}
      />

      <FormInput
        hint="Describe the grooming process"
        label="Short Description"
        name="description"
        id="description"
        multiline
        rows={2}
        onChange={handleDetailsChange}
        value={details.description}
      />

      <Stack spacing={1}>
        <FormLabel>This grooming is best suited for</FormLabel>
        <Autocomplete
          fullWidth
          id="breed"
          name="breed"
          required
          options={breeds}
          renderInput={(params) => <TextField {...params} label="Dog Breed" />}
          getOptionLabel={(option) => option.label}
          value={selectedBreed}
          onChange={(e, newBreed) => setSelectedBreed(newBreed)}
        />
        <HelperText>Start typing or select the breed from the list</HelperText>

        <FormControl component="fieldset">
          <FormLabel component="legend">Dog size</FormLabel>
          <RadioGroup
            row
            aria-label="dogSize"
            name="dogSize"
            value={details.dogSize}
            onChange={handleDetailsChange}
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
        <FormLabel>Approximate grooming time (up to)</FormLabel>
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
            value={details.duration}
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
        value={details.tools}
        onChange={(e) =>
          setDetails({
            ...details,
            tools: e.target.value.split(/\s*,\s*/),
          })
        }
      />

      {/* image: { before: '', after: '' } */}
      <Stack spacing={1}>
        <FormLabel>Upload before & after grooming photos</FormLabel>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <div>
            <ImgUpload
              id="img-before"
              imgLabel="Before"
              name="image.before"
              // value={fileSelect}
              onChange={handleSelectFileChange}
            />
            {/* <img src={fileSelect} alt="" /> */}
            <HelperText sx={{ ml: 1, mt: 1 }}>{selectedFile?.name}</HelperText>
            <button onClick={handleUpload}>Upload</button>
          </div>

          <div>
            <ImgUpload id="img-after" imgLabel="After" />
            <HelperText sx={{ ml: 1, mt: 1 }}>test</HelperText>
          </div>
        </Stack>
      </Stack>

      <FormInput
        hint="Include a grooming video url if available"
        label="Video Link"
        id="video"
        name="video"
        value={details.video}
        onChange={handleDetailsChange}
      />
    </>
  );
}

export default DetailsForm;
