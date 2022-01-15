import React, { useState } from 'react';
import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../../../services/firebase';
import { nanoid } from 'nanoid';

// Components & Data
import FormInput from '../../shared/FormInput';
import FormLabel from '../../shared/FormLabel';
import breeds from '../../../data/breedsData';
import timeMarks from '../../../data/groomingTime';
import ImgUpload from '../../shared/ImgUpload';
import HelperText from '../../shared/HelperText';
import { StyledBtn } from '../../shared/StyledButtons';

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
import ImgPreview from '../../shared/ImgPreview';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';

function DetailsForm({ progress, setProgress }) {
  // PostContext consume
  const { details, setDetails, selectedBreed, setSelectedBreed } =
    usePostContext();

  // Images states
  const [selectedImgBefore, setSelectedImgBefore] = useState(null);
  const [selectedImgAfter, setSelectedImgAfter] = useState(null);

  const handleImageDetailsChange = (name, value) => {
    // handle selected image previews
    if (name === 'img-before') {
      setSelectedImgBefore(value);
    }

    if (name === 'img-after') {
      setSelectedImgAfter(value);
    }
    // when image is uploaded and URL is obtained, insert into details
    // setDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload to Firebase
  const uploadFile = (file, folderName, imgType) => {
    if (!file) return;
    const folderPath = folderName;
    const fileName = `img_${nanoid(10)}_${file.name}`;
    const storageRef = ref(storage, `/${folderPath}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const currentProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(currentProgress);
      },
      (error) => console.log(error),
      () => {
        // when image is uploaded and URL is obtained, update details
        getDownloadURL(uploadTask.snapshot.ref).then((imgURL) => {
          console.log('imgURL:', imgURL);
          if (imgType === 'before') {
            setDetails((prev) => ({
              ...prev,
              image: { ...prev.image, before: imgURL },
            }));
          }
          if (imgType === 'after') {
            setDetails((prev) => ({
              ...prev,
              image: { ...prev.image, after: imgURL },
            }));
          }
        });
      },
    );

    if (progress === 100) {
      alert('File uploaded!');
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    try {
      selectedImgBefore &&
        uploadFile(selectedImgBefore, 'posts_images', 'before');
      selectedImgAfter && uploadFile(selectedImgAfter, 'posts_images', 'after');
    } catch (error) {
      console.log(error);
    }
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
              key="any"
              value="any"
              control={<Radio size="small" />}
              label="Any"
            />
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
        <HelperText sx={{ ml: 0, mb: 2 }}>
          Please choose at least one photo
        </HelperText>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <div>
            <label htmlFor="img-before">
              <input
                type="file"
                id="img-before"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => setSelectedImgBefore(e.target.files[0])}
              />
              <span className="btn-icon">
                <PhotoSizeSelectActualTwoToneIcon
                  sx={{ mr: 1 }}
                  color="secondary"
                  fontSize="small"
                />
                Before
              </span>
            </label>
            {selectedImgBefore && (
              <ImgPreview
                src={URL.createObjectURL(selectedImgBefore)}
                alt="img-preview"
              />
            )}
          </div>

          <div>
            <label htmlFor="img-after">
              <input
                type="file"
                id="img-after"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => setSelectedImgAfter(e.target.files[0])}
              />
              <span className="btn-icon">
                <PhotoSizeSelectActualTwoToneIcon
                  sx={{ mr: 1 }}
                  color="secondary"
                  fontSize="small"
                />
                After
              </span>
            </label>
            {selectedImgAfter && (
              <ImgPreview
                src={URL.createObjectURL(selectedImgAfter)}
                alt="img-preview"
              />
            )}
          </div>

          {/* ! MAJOR ERROR - To revisit... */}
          {/* <div>
            <ImgUpload
              id="img-before"
              imgLabel="Before"
              name="img-before"
              // value={details?.image?.before}
              value="img-before"
              onChange={(e) => setSelectedImgBefore(e.target.files[0])}
              handleImageDetailsChange={handleImageDetailsChange}
            />
            <HelperText sx={{ ml: 1, mt: 1 }}>{selectedFile?.name}</HelperText>
            {selectedImgBefore && (
              <ImgPreview
                src={URL.createObjectURL(selectedImgBefore)}
                alt="img-preview"
              />
            )}
          </div> */}

          {/* <div>
            <ImgUpload
              id="img-after"
              imgLabel="After"
              // name={details.image?.after}
              name="img-after"
              value="img-after"
              onChange={(e) => setSelectedImgAfter(e.target.files[0])}
              handleImageDetailsChange={handleImageDetailsChange}
            />
            <HelperText sx={{ ml: 1, mt: 1 }}>{selectedFile?.name}</HelperText>
            {selectedImgAfter && (
              <ImgPreview
                src={URL.createObjectURL(selectedImgAfter)}
                alt="img-preview"
              />
            )}
          </div> */}
        </Stack>
      </Stack>
      {/* SUBMIT PHOTOS TO STORAGE */}
      {(selectedImgBefore || selectedImgAfter) && (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <StyledBtn onClick={handleUpload} size="small">
            Finalise Photos
          </StyledBtn>
          {progress > 0 && <FormLabel>Processing: {progress} %</FormLabel>}
        </Stack>
      )}

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
